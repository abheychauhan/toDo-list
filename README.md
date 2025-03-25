# Advanced React To-Do Application

## 📌 Overview
The Advanced React To-Do Application is a feature-rich task management app built with React.js. It includes advanced state management, weather API integration, and a responsive design that adapts to both mobile and desktop screens. The app allows users to manage tasks efficiently while displaying real-time weather data.

## 🚀 Features
- ✅ **Task Management**: Add, view, and delete tasks easily.
- 🌦 **Weather Integration**: Fetch and display real-time weather data for the next two days using the OpenWeather API.
- 🔐 **User Authentication**: Basic login/logout functionality (mocked, without backend integration).
- 💾 **Persistent Storage**: Stores tasks in local storage for session persistence.
- 📱 **Responsive UI**: Adapts seamlessly across mobile, tablet, and desktop devices.

## 📸 Screenshots
- **Mobile View** 📱
- **Desktop View** 🖥

## ⚙️ Setup & Installation

### 🛠 Steps to Set Up the Project
1. **Create a new React project using Vite**:
   ```bash
   npm create vite@latest react-to-do-list --template react
   cd react-to-do-list

2. 

  npm install

3. **Set up API keys**:
   Create a .env file in the project root.
   Add your OpenWeather API key:

4. **Run the development server:**
   npm run dev


### 📂 Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (>=14.x)
- **npm** (>=6.x) or **yarn** (optional)

react-to-do-list/
│── src/
│   │── components/
│   │   ├── [Weather.jsx]
│   │   ├── [TaskList.jsx]
│   │   ├── [TaskInput.jsx]
│   │── redux/
│   │   ├── [authSlice.jsx]
│   │   ├── [taskSlice.jsx]
│   │   ├── [store.jsx]
│   │── [App.jsx]
│   │── [main.jsx]
│   │── [index.css]
│── public/
│   ├── vite.svg
│── .env
│── [package.json]
│── [README.md]
│── [vite.config.js]
│── [eslint.config.js]
│── [index.html]



## 🛠 Technologies Used
- ⚛ **React.js** (Functional Components, Hooks)
- 🎯 **Redux** (State Management)
- 🔗 **Axios** (API Calls)
- 🎨 **CSS Grid & Flexbox** (Responsive Design)
- 💾 **LocalStorage** (Data Persistence)
- 🌍 **OpenWeather API** (Weather Integration)