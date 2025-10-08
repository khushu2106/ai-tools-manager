import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    sendPasswordResetEmail, 
    // signInWithRedirect, getRedirectResult, signOut are not used in the form, 
    // but kept here for completeness if you need them later
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAZBpDk0m_QmzMgBefSemJLt6j3959uxK0",
    authDomain: "ai-tools-hub-2025.firebaseapp.com",
    projectId: "ai-tools-hub-2025",
    storageBucket: "ai-tools-hub-2025.appspot.com",
    messagingSenderId: "571951370917",
};

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized successfully");

const auth = getAuth(app);
const db = getFirestore(app);

// Global DOM selectors
const authForm = document.getElementById('auth-form');
const googleButton = document.getElementById('google-sign-in');
const forgetPasswordLink = document.getElementById('forgot-password-link');

/**
 * Displays a message in the designated div and hides it after a timeout.
 * @param {string} message The message content.
 * @param {string} divId The ID of the message div ('signUpMessage').
 */
function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    if (!messageDiv) {
        console.error(`Message div with ID '${divId}' not found.`);
        return;
    }
    
    // Set a background color based on success/error logic if you want. 
    // Assuming the HTML/CSS is handling styling, we just set the text and visibility.
    messageDiv.textContent = message;
    messageDiv.style.display = "block";
    
    // Use a slight delay to ensure 'display: block' is processed before transition
    setTimeout(function() {
        messageDiv.style.opacity = 1; 
    }, 10);

    setTimeout(function () {
        messageDiv.style.opacity = 0;
        setTimeout(() => { messageDiv.style.display = "none"; }, 500); // 500ms matches CSS transition
    }, 5000);
}


// === 1. Form Submission Handler (Email/Password) ===
if (authForm) {
    authForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Use event.submitter to determine which button was clicked
        const submitButton = event.submitter;
        const action = submitButton.textContent.trim();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Register Logic
        if (action === 'Register') {
            const confirmPassword = document.getElementById("confirm-password").value;
            const name = document.getElementById("name").value;

            if (password !== confirmPassword) {
                showMessage('Passwords do not match!', 'signUpMessage');
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const userData = {
                        email: email,
                        name: name,
                        // Add a timestamp or other details if necessary
                    };

                    // Save user data to Firestore
                    const docRef = doc(db, "users", user.uid);
                    return setDoc(docRef, userData); // Return the promise for chaining
                })
                .then(() => {
                    showMessage('Account created successfully. Redirecting...', 'signUpMessage');
                    // Use a timeout to allow the message to show briefly before redirect
                    setTimeout(() => {
                         window.location.href = "index.html";
                    }, 1000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let errorMessage = `Error: ${error.message}`;

                    if (errorCode === 'auth/email-already-in-use') {
                        errorMessage = 'Email Address Already Exists!';
                    } else if (errorCode === 'auth/weak-password') {
                        errorMessage = 'Password should be at least 6 characters.';
                    } else if (errorCode === 'firebase-auth/operation-not-allowed') {
                        errorMessage = 'Email/Password sign-in is disabled. Check Firebase console.';
                    }

                    showMessage(errorMessage, 'signUpMessage');
                });
        } 
        
        // Login Logic
        else if (action === 'Login') {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    showMessage('Login successful. Redirecting...', 'signUpMessage');
                    // Use a timeout to allow the message to show briefly before redirect
                    setTimeout(() => {
                         window.location.href = "index.html";
                    }, 1000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    let errorMessage = `Login failed: ${error.message}`;

                    if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-credential') {
                        errorMessage = 'Invalid email or password.';
                    }

                    showMessage(errorMessage, 'signUpMessage');
                    console.error("Login Error:", error);
                });
        }
    });
}


// === 2. Google Sign-In Handler ===
function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            const docRef = doc(db, "users", user.uid);
            const userData = {
                email: user.email,
                name: user.displayName || 'Google User',
            };

            // { merge: true } ensures existing user data isn't overwritten if they've signed in before
            return setDoc(docRef, userData, { merge: true }); 
        })
        .then(() => {
            showMessage('Signed in with Google. Redirecting...', 'signUpMessage');
            // Use a timeout to allow the message to show briefly before redirect
            setTimeout(() => {
                 window.location.href = "index.html";
            }, 1000);
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = `Google Sign-in failed: ${error.message}`;
            if (errorCode === 'auth/popup-closed-by-user') {
                errorMessage = 'Google Sign-in was cancelled.';
            } else if (errorCode === 'auth/cancelled-popup-request') {
                errorMessage = 'Please try again. Only one sign-in popup can be active.';
            }

            showMessage(errorMessage, 'signUpMessage');
            console.error("Google Sign-in Error:", error);
        });
}

if (googleButton) {
    // Listener is attached ONLY ONCE
    googleButton.addEventListener('click', handleGoogleSignIn);
}


// === 3. Password Reset Handler ===
function handlePasswordReset(event) {
    event.preventDefault(); // Stop the link from navigating

    const emailInput = document.getElementById("email");
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email) {
        showMessage('Please enter your email address in the email field above.', 'signUpMessage');
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            showMessage(`Password reset link sent to ${email}. Check your inbox.`, 'signUpMessage');
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = `Could not send reset email: ${error.message}`;

            // Firebase recommends using a generic message to prevent email enumeration
            if (errorCode === 'auth/user-not-found' || errorCode === 'auth/invalid-email') {
                 errorMessage = 'If an account exists for that email, a password reset link has been sent.';
            }
            
            showMessage(errorMessage, 'signUpMessage');
            console.error("Password Reset Error:", error);
        });
}

if (forgetPasswordLink) {
    // Listener is attached ONLY ONCE
    forgetPasswordLink.addEventListener('click', handlePasswordReset);
}