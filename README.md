README.md
md

# 🔐 Full Stack SSO Authentication App

This project is a full-stack implementation of Google SSO (Single Sign-On) authentication using:

- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express + MongoDB
- **SSO**: Google OAuth 2.0
- **Security**: JWT authentication
- **Testing**: Jest + Supertest
- **Code Quality**: ESLint + Prettier

---

### ✅ Step 1: Clone the Project

```bash frontend
git clone https://github.com/baranirajeshbabu30/sso-login

cd sso-login
```

```bash backend
git clone https://github.com/baranirajeshbabu30/sso-server

cd sso-server
```

## 📦 Project Structure

project-root/
├── sso-login/ # Frontend (React)
└── sso-server/ # Backend (Node + Express + MongoDB)

yaml


---

# 🔧 Backend (`sso-server`)

## 📁 Technologies Used

- Express.js
- TypeScript
- MongoDB (Mongoose)
- Google OAuth 2.0
- JWT for authentication
- Jest + Supertest
- ESLint + Prettier

---

## 🚀 Getting Started

### 1. Install Dependencies

```
cd sso-server

npm install


2. Setup Environment Variables
Create a .env file:

env

PORT=5000
MONGO_URI=mongodb://localhost:27017/sso-db
JWT_SECRET=your_jwt_secret_here
GOOGLE_CLIENT_ID=your_google_client_id_here
🔐 Generate JWT Secret


node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

Paste the output in your .env as JWT_SECRET.

3. Run Backend Server

npm run dev

Visit your API at: http://localhost:5000

3: Set Up and Run the Frontend (UI)
Open a new terminal and go to the frontend folder:


cd sso-client
Install dependencies:

npm install

Create a .env file:

env

VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_BASE_URL=http://localhost:5000/api
Start the development login:

npm start

Your frontend will be available at: http://localhost:3000

4. Run Tests

npm test            # Run all tests
npm run test:watch  # Watch test files
npm run test:coverage  # Generate coverage

5. Lint and Format

npm run lint       # Check code with ESLint
npm run format     # Format code with Prettier

✅ Backend Scripts (package.json)
json

"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node-dev src/index.ts",
  "lint": "eslint 'src/**/*.{ts,tsx}'",
  "format": "prettier --write 'src/**/*.{ts,tsx,js,json}'",
  "test": "jest --detectOpenHandles",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}

🔧 Useful Scripts (Frontend package.json)
json

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "react-scripts test",
  "lint": "eslint 'src/**/*.{ts,tsx}'",
  "format": "prettier --write 'src/**/*.{ts,tsx,js,jsx,json,css,scss,md}'"
}


