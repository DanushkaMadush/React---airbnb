# flow-watch-api-core


# **Monitoring Dashboard**

## **Description**
A Node.js backend project for monitoring dashboard application that allow users to dynamically manage workflows. The project is designed to efficiently handle backend operations and integrates with MongoDB.

---

## **Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Contributing](#contributing)
- [License](#license)

---

## **Installation**

1. Download and Install Node.js :
   https://nodejs.org/en/download/prebuilt-installer/current

1. Clone the repository:
   ```bash
   git clone https://github.com/codeolimabiz/flow-watch-api-core.git
   ```

2. Navigate to the project directory:
   ```bash
   cd flow-watch-api-core
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create .env file in the root directory and add:
   ```bash
   PORT = 3000
   MONGODB_URI = mongodb://localhost:27017/flow-watch
   ```

5. Start the development server:
   ```bash
   node server.js
   ```

---

## **Usage**

- Open `http://localhost:3000` in your browser.
- Ensure MongoDB is running on your local machine.
- Use POSTMAN to test the endpoints. https://www.postman.com/

---

## **Folder Structure**

The project is organized as follows:

```
FLOW-WATCH-API-CORE/
├── models/
│   └── pipelineModel.js
├── routes/
│   └── pipelineRoutes.js
├── services/
│   └── pipelineServices.js
├── .env
├── app.js
├── package.lock.json
├── package.json
└── README.md
```

**models/** - Contains Mongoose schema for the pipeline model.

**routes/** - API routes for handling requests.

**controllers/** - Handles business logic and processes for each route.

**app.js** - Entry point to initialize the server.

---

## **Commit Message Guidelines**

### **Commit Format**
We follow a structured commit message format for clarity and consistency:

```plaintext
<type>(<scope>): <subject>

[Optional Body]

[Optional Footer]
```

### **Commit Types**
| Type       | Description                                   |
|------------|-----------------------------------------------|
| `feat`     | A new feature                                |
| `fix`      | A bug fix                                    |
| `docs`     | Documentation-only changes                   |
| `style`    | Changes that do not affect functionality     |
| `refactor` | Code changes that neither fix bugs nor add features |
| `perf`     | Code changes to improve performance          |
| `test`     | Adding or updating tests                    |
| `chore`    | Changes to build tools, scripts, or auxiliary tools |
| `ci`       | CI configuration changes                    |
| `revert`   | Reverts a previous commit                   |

### **Examples**
1. **Feature Addition**:
   ```plaintext
   feat(header): add navigation bar

   Added a responsive navigation bar to the header component.
   ```
2. **Bug Fix**:
   ```plaintext
   fix(api): resolve missing authorization header issue

   Fixed an issue where the authorization header was not sent in certain API requests.
   ```

---

## **Contributing**

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code follows the commit message guidelines provided above.

---

## **License**

This project is licensed under the MIT License.
