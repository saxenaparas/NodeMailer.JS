# 📧 NodeMailer Email Sender with .env Support

A simple Node.js project to send emails using Gmail SMTP with Nodemailer. Securely handles sensitive configuration using `.env` files.

---

## ✨ Features

- Send emails via Gmail SMTP
- Secure credential management with `.env`
- Reusable `sendMail()` function
- Clean project structure
- `.gitignore` and `.env.example` included

---

## 📦 Tech Stack

- [Node.js](https://nodejs.org/)
- [Nodemailer](https://nodemailer.com/about/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Project Structure

```
📂 NodeMailer.JS/
├── 📄 nodemailer.js
├── 📄 .env
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md
```


---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/email-sender.git
cd email-sender
```

### 2. Install dependencies
```bash
npm i
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add your Gmail credentials using an App Password:
```bash
NODE_USER=your-email@gmail.com
NODE_PASS=your-app-password
```

> 🔐 Never use your real Gmail password. Use an App Password.

You can also copy the example file:
```bash
cp .env.example .env
```

### 4. Run the project
```bash
node mailsend.js
```

---

## 🧪 Example Usage
Inside `mailsend.js`:

```js
sendMail('to@example.com', 'Hello from NodeMailer', '<b>This is an email sent via Node.js!</b>');
```

---

## 🛡️ Security Notes

- Never commit your `.env` file.
- `.gitignore` ensures `.env` and `node_modules/` are excluded from version control.
- Use `process.env` to access credentials securely.

---

## 📝 .env.example
```env
# Rename this file to .env and replace values with your own
NODE_USER=your-email@gmail.com
NODE_PASS=your-app-password
```

---
