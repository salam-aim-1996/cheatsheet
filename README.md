# Welcome to cheatsheet.cam 🎨

**cheatsheet.cam** is a full-stack cheatsheet that allows you to **visualize** and easily **copy-paste** the code snippets for your projects.
<br>
<br>
![Alt text](https://images.cheatsheet.cam/images/image-1729743402166.webp)

<br>

## 🌐 Production

Check out the live site: [cheatsheet.cam](https://cheatsheet.cam)

<br>
<br>

## 🖥️ Running Locally

### Steps to reproduce the project on your local machine:

1. **Fork the repository**
   Click on the Fork button in the top-right corner. This creates a copy of the repository in your GitHub account.

2. **Download the forked repository**:
   Open terminal.
   Change directory to Desktop or any where.
   Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/your-username/cheatsheet.git

   ```
   Then, change directory to the repository.
   ```bash
   cd cheatsheet
   ```

4. **Visual Studio Code**:
   Open the repository in VS Code.
   ```bash
   code .
   ```

5. **Install dependencies**:

   ```bash
   npm install

   ```

6. **Run the project**:

   ```bash
   npm run dev

   ```
7. **Check remote linking...**:
   Check the remotes.
   ```bash
   git remote -v
   ```
   

### ⚠️ Attention:

You may encounter different data for authentication and comments in production and development; this is because they have separate backends and databases.
<br>
<br>

## 🤝 Collaboration

1. **Issues**:

   - You can see all the issues that need to be fixed in the [Issues section](https://github.com/aim-salam/cheatsheet/issues).
   - To take an issue, comment using this format:

2. **Contribute**:

   - After you are assigned an issue, you are ready to contribute.
   - Create a new branch in your local repository.
     ```bash
      git checkout -b feature/my-new-feature
     ```
   - **It's time to code.**.
   - Then, after making changes, commit and push them to the new branch in your remote repository.
     ```bash
      git push origin feature/my-new-feature
     ```
     If you have problem to push into your forked repository, please create an issue here. I'll help you learn how to fix Github credentials in your VS code.
     
   - Create a pull request to merge your changes into the production code.
   - Your pull request will be visible on this [site](https://github.com/aim-salam/cheatsheet/pulls). Please wait for my response. I will either approve your code and merge it into production, or provide feedback if changes are needed.
   - If your pull request merged, you can delete the branch in both local and remote repository. To contribute again, create new branch for each issues.

3. **Synchronize**:

   - Everytime we want to contribute, make sure our main repository is up-to-date.
   - Remote main branch : Synchronize your main remote repository with the production remote main repository by clicking **Sync fork**.
   - Local main branch : In your local repository, switch to main branch. Then, update to the latest codebase to stay up to date with new changes.
   ```bash
   git pull
   ```
<br>
<br>
Thank you for contributing to cheatsheet.cam!
