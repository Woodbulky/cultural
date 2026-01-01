# Guide to Deploying Your Project to GitHub

Welcome! This guide will walk you through the steps to upload and deploy your Antigravity project to GitHub. By the end, your project will be safe online and easy to share with others.

## 1. Introduction

**GitHub** is a platform where developers store their code online. Think of it like a cloud storage for your projects, but with special features that help you track changes and collaborate with others.

**Why use GitHub?**
*   **Backup:** Your code is safe even if your computer crashes.
*   **Sharing:** You can easily show your work to friends or potential employers.
*   **Version Control:** You can save different versions of your project.

## 2. Prerequisites

Before we start, make sure you have the following:

1.  **A GitHub Account:** If you don't have one, sign up for free at [github.com](https://github.com/).
2.  **Git Installed:** You need Git installed on your computer. You can check by opening a terminal and typing `git --version`. If it's not installed, download it from [git-scm.com](https://git-scm.com/).
3.  **Your Project:** A completed project in Antigravity (like the one you have open now!).

## 3. Create a GitHub Repository

A **repository** (or "repo") is where your project lives on GitHub.

1.  Log in to your [GitHub account](https://github.com/).
2.  Click the **+** icon in the top-right corner of the page.
3.  Select **New repository**.
4.  **Repository name:** Enter a name for your project (e.g., `my-website`).
5.  **Description:** (Optional) Write a short sentence about what your project does.
6.  **Public/Private:** Choose **Public** if you want everyone to see it, or **Private** if you want to keep it to yourself.
7.  Click the green **Create repository** button.

*Leave this page open! We will need the link from it in a moment.*

## 4. Prepare the Project

1.  Open your project folder on your computer.
2.  Make sure all your files (`index.html`, CSS files, images, etc.) are saved.
3.  Check that your files are organized correctly in the folder.

## 5. Upload the Project to GitHub

Now, let's connect your local folder to the GitHub repository.

1.  **Open the Terminal** in your project folder. (In Antigravity or VS Code, you can usually do this by pressing `` Ctrl+` ``).

2.  **Initialize Git:**
    Type the following command and press Enter:
    ```bash
    git init
    ```
    *This tells Git to start watching this folder.*

3.  **Add Files:**
    Type this command and press Enter:
    ```bash
    git add .
    ```
    *This stages all your files to be saved. The `.` means "all files".*

4.  **Commit Files:**
    Type this command and press Enter:
    ```bash
    git commit -m "Initial commit"
    ```
    *This saves your files with a message "Initial commit".*

5.  **Connect to GitHub:**
    Go back to the GitHub page you left open. Look for the section **"…or push an existing repository from the command line"**. Copy the command that looks like this:
    ```bash
    git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
    ```
    Paste it into your terminal and press Enter.

6.  **Push to GitHub:**
    Finally, upload your files by typing:
    ```bash
    git push -u origin main
    ```
    *You might be asked to sign in to GitHub if this is your first time.*

## 6. Verify Deployment

To make sure everything worked:

1.  Go back to your GitHub repository page in your browser.
2.  Refresh the page.
3.  You should now see all your files listed there!

## 7. Conclusion

**Congratulations!** You have successfully uploaded your project to GitHub.

*   **Next Steps:** Try making a change to a file, then repeat the `add`, `commit`, and `push` steps to update your code online.
*   **Explore:** Look into "GitHub Pages" if you want to host your website for free so others can view it live!
