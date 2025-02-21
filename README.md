# Task Management Application

📌 **Overview**  
The Task Management Application is a real-time, drag-and-drop task management system where users can add, edit, delete, and reorder tasks. Tasks are categorized into To-Do, In Progress, and Done, with instant database synchronization for persistence.

This project demonstrates seamless frontend interactivity, backend data management, and real-time synchronization, while adhering to a structured design system.

---

📖 **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

---

✨ **Features**
- 🔒 **Authentication**: Users must sign in via Firebase (Google Authentication).
- 📌 **Task Management**:
  - Create, edit, delete, and reorder tasks.
  - Drag tasks across To-Do, In Progress, and Done categories.
  - Instant save & sync to MongoDB.
- ⚡ **Real-Time Synchronization**:
  - Tasks retain their last order when refreshing.
  - Live updates via MongoDB Change Streams / WebSockets.
- 🎨 **Modern, Responsive UI**:
  - Built with Vite.js + React.
  - Uses a drag-and-drop library.
  - Clean design with a limited color palette.
- 📱 **Mobile & Desktop Friendly**:
  - Fully responsive layout.
  - Optimized drag-and-drop experience on touch devices.

---

🛠 **Tech Stack**  
| **Technology**                        | **Purpose**              |
|---------------------------------------|--------------------------|
| Vite.js + React                       | Frontend framework       |
| Firebase Authentication               | User authentication      |
| MongoDB + Express.js                  | Backend & database       |
| Node.js                               | Server runtime           |
|  | 
