# Chat App (MERN + Socket.IO)

A full-stack real-time chat application built with **MongoDB, Express, React, Node.js**, and **Socket.IO**.

## Live Demo

🔗 https://chat-app-amyb.onrender.com

> Note: If hosted on a free Render plan, first load may take 30-60 seconds.

## Features

- User authentication (signup/login/logout)
- JWT-based session with HTTP-only cookies
- Update profile picture
- Real-time messaging with Socket.IO
- Online/offline user presence
- Theme switching (DaisyUI themes)
- Responsive chat layout with loading skeletons

## Tech Stack

### Frontend
- React + Vite
- Zustand (state management)
- React Router
- Axios
- Tailwind CSS + DaisyUI
- Socket.IO Client

### Backend
- Node.js + Express 5
- MongoDB + Mongoose
- JWT + cookie-parser
- Cloudinary (image uploads)
- Socket.IO

## Project Structure

```bash
chat-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── lib/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── lib/
└── package.json
```

## Environment Variables

Create `backend/.env` and add:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## Local Setup

### 1) Clone repository

```bash
git clone https://github.com/Rohit-Kiran24/chat-app.git
cd chat-app
```

### 2) Install dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3) Run backend

```bash
npm run dev --prefix backend
```

### 4) Run frontend

```bash
npm run dev --prefix frontend
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5001`

## Build & Start (Production)

From project root:

```bash
npm run build
npm run start
```

## API Overview

### Auth Routes (`/api/auth`)
- `POST /signup`
- `POST /login`
- `POST /logout`
- `PUT /update-profile`
- `GET /check`

### Message Routes (`/api/messages`)
- `GET /users`
- `GET /:id`
- `POST /send/:id`

## Deployment Notes (Render)

- Root build command: `npm run build`
- Root start command: `npm run start`
- Make sure all `backend/.env` variables are configured in Render dashboard.
- Express 5 production catch-all route should use `/{*splat}` syntax.

## Troubleshooting

- **`Cannot read properties of undefined (reading 'on')`**
  - Ensure socket connection is initialized before subscribing to events.
- **Render deploy route error (`Missing parameter name at index 1: *`)**
  - Use Express 5 compatible wildcard route `/{*splat}`.
- **`openssl rand -base64 32` not working on Windows**
  - Use PowerShell/Node alternative to generate JWT secret.

## Author

Rohit Kiran .p
