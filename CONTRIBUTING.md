# Contributing to AI Tools Collection

Thank you for your interest in contributing to the AI Tools Collection! This document provides detailed guidelines for contributors.

## 🎯 Ways to Contribute

### 1. Adding New AI Tools

- Research and add new free/freemium AI tools
- Verify tool functionality and accessibility
- Write clear, helpful descriptions

### 2. Improving Existing Content

- Update tool descriptions
- Fix broken links
- Improve categorization

### 3. Code Contributions

- Bug fixes and improvements
- New features and enhancements
- Performance optimizations

### 4. Documentation

- Improve README and guides
- Add tutorials or examples
- Translate content

## 📝 Step-by-Step Contribution Process

### Adding a New AI Tool

1. **Research the Tool**
   - Ensure it's genuinely useful
   - Verify it has a free tier or is completely free
   - Test the tool yourself

2. **Fork & Clone**

   ```bash
   # Fork the repo on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/ai-tools-collection.git
   cd ai-tools-collection
   ```

3. **Create a Branch**

   ```bash
   git checkout -b add-new-tool-name
   ```

4. **Edit links.json**

   ```json
   {
     "title": "Tool Name",
     "url": "https://example.com",
     "description": "Clear, concise description (max 60 characters)"
   }
   ```

5. **Add Yourself to Contributors**
   Edit `contributors.json`:

   ```json
   {
     "name": "Your Name",
     "github": "your-username",
     "avatar": "https://github.com/your-username.png",
     "contributions": ["Added Tool Name", "Fixed bug in category X"],
     "website": "https://your-site.com"
   }
   ```

6. **Validate Your Changes**

   ```bash
   # Check for duplicates
   npm run check-duplicates
   
   # Validate all data
   npm run validate
   ```

7. **Test Your Changes**
   - Open `index.html` in browser
   - Verify tool appears correctly
   - Check link functionality
   - Test search and filter features

8. **Commit & Push**

   ```bash
   git add .
   git commit -m "feat(tools): add [Tool Name] to [Category] category"
   git push origin add-new-tool-name
   ```

8. **Create Pull Request**
   - Use descriptive title
   - Explain the value of the tool
   - Include screenshots if relevant

## ✅ Quality Standards

### For AI Tools

- **Accessibility**: Must have free tier or be completely free
- **Functionality**: Tool must be working and accessible
- **Relevance**: Must be AI-related and genuinely useful
- **Uniqueness**: No duplicates (check existing tools first)
- **Description**: Clear, concise, under 60 characters

### For Code

- **Clean Code**: Follow existing patterns and style
- **Responsive**: Must work on mobile devices
- **Performance**: Don't slow down the site
- **Testing**: Test changes thoroughly

## 📂 File Structure Guide

```
├── index.html              # Main page structure
├── style.css               # All styling and animations
├── script.js               # JavaScript functionality
├── links.json              # AI tools database
├── contributors.json       # Contributors information
├── manifest.json           # PWA manifest
├── package.json            # Project configuration
├── README.md               # Main documentation
├── CONTRIBUTING.md         # This file
├── COMMIT_GUIDELINES.md    # Commit message standards
├── CONTRIBUTOR_EXAMPLE.md  # Contributor profile template
├── validate-links.js       # Link validation script
├── validate-contributors.js # Contributor validation script
├── check-duplicates.js     # Duplicate detection script
├── assets/                 # Project assets
│   ├── favicon.svg         # Site favicon
│   ├── og-image.svg        # Social media image
│   └── README.md           # Assets documentation
├── src/                    # Source files (future modular structure)
└── tests/                  # Test files
```

## 🏷️ Categories

Current categories and their criteria:

- **AI Writing & Content** ✍️: Writing, editing, content creation, research assistance
- **AI Design & Images** 🎨: Image generation, design tools, visual content creation
- **AI Presentations** 📊: Presentation creation, slide design, storytelling tools
- **AI Coding & Development** 💻: Code assistance, development environments, programming tools
- **AI Video & Audio** 🎬: Video editing, audio processing, multimedia creation
- **AI Productivity** ⚡: Productivity tools, automation, workflow optimization
- **AI Entertainment** 😂: Fun applications, memes, games, creative entertainment
- **AI Model Prototyping** 🧪: Model development, testing, experimentation platforms
- **AI Game & Strategy** 🎮: Gaming applications, strategic AI tools, interactive experiences
- **AI Local Models** 🖥️: Tools for running and managing AI models locally

### Adding New Categories

If none of the existing categories fit:

1. **Propose the category** in your PR description
2. **Use appropriate emoji** (single emoji only)
3. **Ensure it's AI-focused** and distinct from existing categories
4. **Include at least 3 tools** in the new category

## 🚫 What We Don't Accept

- **Paid-only tools** (must have free tier)
- **Broken or inaccessible links**
- **Duplicate tools** already in the collection
- **Non-AI tools** or barely AI-related tools
- **Spam or promotional content**
- **Tools with poor user experience**

## 🔍 Review Process

1. **Automated Validation**:
   - JSON format validation
   - Link accessibility checks
   - Duplicate detection
   - Data structure verification

2. **Manual Review**:
   - Maintainers check tool quality and relevance
   - Verify free tier availability
   - Assess tool usefulness and accuracy

3. **Testing**:
   - Tools are tested for functionality
   - Mobile responsiveness checked
   - Search and filter features validated

4. **Feedback**:
   - You may receive requests for changes
   - Constructive feedback provided for improvements

5. **Merge**:
   - Approved contributions are merged
   - Contributors are recognized in the project

## 🏆 Recognition

Contributors are recognized in multiple ways:

- **Contributors Section**: Your profile appears on the website
- **GitHub Contributors**: Listed in repository contributors
- **Commit History**: Your contributions are permanently recorded
- **Special Recognition**: Outstanding contributors may be highlighted

## 📋 PR Template

When creating a pull request, please include:

```markdown
## Description
Brief description of what you're adding/changing

## Type of Change
- [ ] New AI tool addition
- [ ] Bug fix
- [ ] Feature enhancement
- [ ] Documentation update

## Tool Details (if adding a tool)
- **Tool Name**: 
- **Category**: 
- **Why it's valuable**: 
- **Free tier confirmed**: Yes/No

## Checklist
- [ ] I have tested the tool myself
- [ ] The tool has a free tier or is completely free
- [ ] I have added myself to contributors.json
- [ ] I have tested my changes locally
- [ ] The tool is not a duplicate
```

## 🤝 Community Guidelines

- **Be Respectful**: Treat all contributors with respect
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Patient**: Reviews take time, maintainers are volunteers
- **Be Collaborative**: Work together to improve the project

## 📞 Getting Help

- **Questions**: Open a [GitHub Discussion](https://github.com/ArshdeepGrover/ai-tools-collection/discussions)
- **Issues**: Report bugs via [GitHub Issues](https://github.com/ArshdeepGrover/ai-tools-collection/issues)
- **Direct Contact**: Reach out to [Arshdeep Singh](https://arshdeepsingh.info)

## 🎉 Thank You

Every contribution, no matter how small, helps make this resource better for the entire community. Thank you for being part of this project!

---

Happy Contributing! 🚀
