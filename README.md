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
   Make sure you have your own repository on GitHub by clicking **Fork**.

2. **Download the forked repository**:
   Download the forked repository by clicking the **Code** button, then **Download ZIP** button:
   Then, unzip the file.

3. **Visual Studio Code**:
   Open Visual Studio Code and choose the root folder (cheatsheet-main).

4. **Install dependencies**:

   ```bash
   npm install

   ```

5. **Run the project**:

   ```bash
   npm run dev

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
   - After making changes, commit them to the new branch.
   - Then push.
   - If your remote repository doesn’t have the current branch, create a new one.
     ```bash
      git push origin feature/my-new-feature
     ```    
   - Create a pull request to merge your changes into the production code.
   - Your pull request will be visible on this [site](https://github.com/aim-salam/cheatsheet/pulls). Please wait for my response. I will either approve your code and merge it into production, or provide feedback if changes are needed.

3. **More contributions**:

   - Synchronize your main remote repository with the production remote main repository by clicking **Sync fork**.
   - In your local repository, switch to main branch. Then, update to the latest codebase to stay up to date with new changes.

   ```bash
   git pull
   ```

   - Create a new branch for each issue and repeat step 2...

<br>
<br>
Thank you for contributing to cheatsheet.cam!
