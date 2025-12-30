Pastebin-Lite
Pastebin-Lite is a lightweight full-stack web application that allows users to create, store, and share text snippets through unique URLs. It is a simplified alternative to Pastebin, focusing on speed, usability, and essential paste-sharing features.

🚀 Features
Create and share text pastes instantly
Unique auto-generated URL for each paste
Optional expiration time (TTL)
Optional maximum view limit
RESTful API architecture
Responsive UI built with React
🛠️ Tech Stack
Frontend

React
Vite
Tailwind CSS
Backend

Node.js
Express.js
MongoDB
Mongoose
⚙️ How to Run the Project Locally
Prerequisites
Node.js (v18 or later)
MongoDB (local or cloud – MongoDB Atlas)
Git
1️⃣ Clone the Repository
git clone https://github.com/your-username/pastebin-lite.git
cd pastebin-lite
# Pastebin-Lite

Pastebin-Lite is a lightweight full-stack web application that allows users to create, store, and share text snippets through unique URLs. It is a simplified alternative to Pastebin, focusing on speed, usability, and essential paste-sharing features.

---

## 🚀 Features
- Create and share text pastes instantly
- Unique auto-generated URL for each paste
- Optional expiration time (TTL)
- Optional maximum view limit
- RESTful API architecture
- Responsive UI built with React

---

## 🛠️ Tech Stack
**Frontend**
- React
- Vite
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## ⚙️ How to Run the Project Locally

### Prerequisites
- Node.js (v18 or later)
- MongoDB (local or cloud – MongoDB Atlas)
- Git

Steps

1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/pastebin-lite.git
cd pastebin-lite
```

2️⃣ Backend Setup
```bash
cd Backend
npm install
```


Create a .env file in the Backend folder:
```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```
Start the backend server:
```bash
npm start
```
3️⃣ Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

The application will be available at:
```bash
http://localhost:5173
```
🗄️ Persistence Layer
Pastebin-Lite uses MongoDB as its persistence layer.
All paste data (content, expiration time, view limits, and metadata) is stored in a MongoDB database using Mongoose ODM. This ensures reliable data storage, easy querying, and scalability.

📁 Project Structure

Pastebin-Lite/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
└── README.md


📌Notes
- This repository contains complete source code, not just build artifacts.

- Environment files (.env) are intentionally excluded from version control.
…
- Can be easily extended with authentication, syntax highlighting, or rate limiting.


