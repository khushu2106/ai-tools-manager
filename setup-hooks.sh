#!/bin/bash
# Setup script for git hooks

echo "🔧 Setting up git hooks..."

# Create hooks directory if it doesn't exist
mkdir -p .git/hooks

# Copy pre-commit hook
cp .github/hooks/pre-commit .git/hooks/pre-commit

# Make it executable
chmod +x .git/hooks/pre-commit

echo "✅ Git hooks installed successfully!"
echo ""
echo "📋 Hook behavior:"
echo "   • Only runs on 'production' branch commits"
echo "   • Only checks for duplicate links in links.json"
echo "   • Skips validation on all other branches"
echo ""
echo "🧪 To test manually:"
echo "   node validate-links.js --duplicates-only"