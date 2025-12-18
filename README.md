# React Application

This project is a React application utilizing **Redux** for state management and **Tailwind CSS** for styling.

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## Setup and Installation

Follow these steps to set up and run the project locally:

### 1. Install Dependencies

Since the `package.json` file is not included, you need to initialize the project and install the dependencies manually. Run the following commands:

```bash
# Initialize project and set type to module
npm init -y
npm pkg set type=module

# Install Core Dependencies (React, Redux, Router, Axios)
npm install react react-dom react-router-dom @reduxjs/toolkit react-redux axios

# Install Styling Dependencies (Tailwind CSS, DaisyUI, MUI, FontAwesome)
npm install tailwindcss postcss @tailwindcss/postcss @tailwindcss/cli daisyui @mui/material @emotion/react @emotion/styled @fortawesome/fontawesome-free

# Install Other Dependencies (Forms, Maps, UI)
npm install react-hook-form formik yup leaflet react-leaflet @radix-ui/react-dialog

# Install Development Dependencies (Vite, ESLint, Types)
npm install -D vite @vitejs/plugin-react eslint @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh @types/react @types/react-dom tw-animate-css
```

### 2. Start the Development Server

To run the application in development mode:

```bash
npm start
```

Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

May this readme file wrong if any issue occure take help of chatgpt :slight_smile:.
