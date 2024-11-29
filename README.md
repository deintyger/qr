# QR Code Generator Debugging Challenge

This document outlines the steps for collaborating on our QR Code Generator debugging challenge. Follow these steps to exchange, add errors to, and fix each other’s code.

---

## **1. Cloning Each Other’s Repositories**

1. Clone your partner’s repository to your local machine:
   ```bash
   git clone https://github.com/partner-username/partner-repository-name.git
   ```

2. Navigate into the cloned repository:
   ```bash
   cd partner-repository-name
   ```

3. Test the original code to ensure it works as expected:
   ```bash
   npm install
   node index.js or app.js or main.js
   ```

---

## **2. Creating the `add-error` Branch**

1. Create a new branch called `add-error` for adding intentional errors:
   ```bash
   git checkout -b add-error
   ```

2. Add deliberate errors to your partner’s code. Examples:
   - Syntax errors: Missing brackets, typos in method names, etc.
   - Logic errors: Change conditions, alter variable names.
   - File errors: Remove or rename required files.

3. Save your changes, then commit them:
   ```bash
   git add .
   git commit -m "Added intentional errors for debugging practice"
   ```

4. Push the `add-error` branch to your own repository:
   ```bash
   git push origin add-error
   ```

5. Share your repository URL and the branch name with your partner so they can work on fixing the errors. Example:
   ```
   Repository: https://github.com/your-username/qr-code-generator
   Branch: add-error
   ```

---

## **3. Fixing the Errors in the `add-error` Branch**

Once you’ve received your partner’s `add-error` branch:

1. Clone or fetch the `add-error` branch from their repository:
   ```bash
   git clone -b add-error https://github.com/partner-username/partner-repository-name.git
   ```

   If you’ve already cloned their repository, just fetch the branch:
   ```bash
   git fetch origin add-error
   git checkout add-error
   ```

2. Debug and fix the errors in the code. Use tools like:
   - `console.log` for debugging.
   - Node.js debugger: 
     ```bash
     node inspect index.js
     ```
     If you choose to tho

3. Once fixed, create a new branch called `fixed-error`:
   ```bash
   git checkout -b fixed-error
   ```

4. Save and commit your fixes:
   ```bash
   git add .
   git commit -m "Fixed errors from the add-error branch"
   ```

5. Push the `fixed-error` branch to your own repository:
   ```bash
   git push origin fixed-error
   ```

6. Share the repository URL and branch name with your partner for review. Example:
   ```
   Repository: https://github.com/your-username/qr-code-generator
   Branch: fixed-error
   ```

---

## **4. Reviewing Each Other’s Fixes**

1. Clone or fetch the `fixed-error` branch from your partner’s repository:
   ```bash
   git fetch origin fixed-error
   git checkout fixed-error
   ```

2. Test their fixes locally to confirm the errors were resolved:
   ```bash
   npm install
   node index.js
   ```

3. Discuss the debugging process and share feedback.

---

### **Summary of Branches**
- `add-error`: Branch where intentional errors are introduced.
- `fixed-error`: Branch where the introduced errors are fixed.

This workflow ensures clear collaboration and mirrors real-world debugging scenarios.
