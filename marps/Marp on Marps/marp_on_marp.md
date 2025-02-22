---
marp: true
theme: default
paginate: true
backgroundColor: #ffffff
---

# What is MARP?
## An Introduction and Guide to Getting Set Up

---

## **What is MARP?**
**MARP (Markdown Presentation)** is a framework that allows users to create presentations using simple Markdown syntax. It converts Markdown files into visually appealing slides.

### **Why Use MARP?**
- **Lightweight & Simple** – No need for complex slide software.
- **Version Control Friendly** – Works well with Git for tracking changes.
- **Customizable** – Supports themes, layouts, and interactive elements.
- **Cross-Platform** – Runs on Windows, macOS, and Linux.
- **Export Options** – Supports PDF, HTML, and PowerPoint exports.

---

## **How MARP Works**
MARP extends Markdown to support slides using `---` as a separator.  
A basic MARP slide deck looks like this:

```markdown
---
marp: true
---

# Slide Title

Some content here.

---

## Next Slide

More content.
```

MARP also supports:
- **Custom Themes** (CSS-based styling)
- **Speaker Notes**
- **Code Blocks & Syntax Highlighting**
- **Math Equations (LaTeX)**

---

## **Getting Started with MARP**
### **1. Install MARP CLI or VS Code Extension**
#### **Option 1: Install via NPM (CLI Version)**
```sh
npm install -g @marp-team/marp-cli
```

#### **Option 2: Use MARP for VS Code**
1. Install [MARP for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode).
2. Open a `.md` file and enable MARP preview.

---

## **Creating Your First MARP Presentation**
1. Open a Markdown file (`.md`).
2. Add `marp: true` at the top.
3. Separate slides using `---`.
4. Use Markdown syntax to format content.
5. Preview the slides in VS Code or export using:

```sh
marp my-presentation.md --pdf
```

---

## **MARP Features You Should Know**
### **Themes & Custom Styling**
MARP supports theming via CSS:
```css
/* Custom Theme Example */
section {
  background-color: #f4f4f4;
  color: #333;
}
```
Apply the theme using:
```markdown
---
theme: my-theme
---
```

### **Exporting Options**
- `--pdf` → Export as PDF
- `--html` → Export as an interactive web page
- `--pptx` → Export as a PowerPoint file

---

## **Hosting MARP Presentations**
Once you create your MARP slides, you can host them online for easy sharing.

### **1. GitHub Pages (Free & Easy)**
1. Push your MARP presentation (`index.html`) to a GitHub repository.
2. Enable GitHub Pages under **Settings \> Pages**.
3. Access it at `https://yourusername.github.io/repo-name/`.

### **2. Vercel (Fast & Flexible)**
1. Install Vercel CLI:
```sh
npm install -g vercel
```
2. Navigate to your project folder and deploy:
```sh
vercel
```
3. Get a unique URL or link it to a custom domain.

Both options provide **free hosting** and **auto-deployment** for updates.

---

## **Conclusion**
MARP is a powerful tool for creating presentations efficiently using Markdown. It’s an excellent alternative to traditional slide decks, offering speed, version control, and flexibility.

💡 **Next Steps:**
- Install MARP and try it out.
- Experiment with themes and layouts.
- Host your presentation on **GitHub Pages** or **Vercel** for easy sharing.
- Create and showcase your first MARP presentation!

🚀 Happy Presenting!

