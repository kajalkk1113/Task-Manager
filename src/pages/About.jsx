import React from "react";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          background: "#fff",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            marginBottom: "10px",
            fontSize: "2.5rem",
          }}
        >
          📚 Student Task Manager
        </h1>

        <h3
          style={{
            color: "#555",
            marginBottom: "20px",
          }}
        >
          Developed by Kajal
        </h3>

        <p
          style={{
            color: "#444",
            lineHeight: "1.8",
            fontSize: "17px",
            textAlign: "justify",
          }}
        >
          <strong>Student Task Manager</strong> is a React-based web application
          that helps students organize and manage their daily tasks efficiently.
          It provides a clean and user-friendly interface where students can add,
          update, and track their work with ease.
        </p>

        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            background: "#f8fafc",
            borderRadius: "12px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
              marginBottom: "15px",
            }}
          >
            🚀 Technologies & Concepts Used
          </h2>

          <ul
            style={{
              lineHeight: "2",
              color: "#333",
              fontSize: "16px",
            }}
          >
            <li>⚛ React Project Setup using Vite</li>
            <li>📝 JSX</li>
            <li>🧩 Functional Components</li>
            <li>♻ Component Reusability</li>
            <li>📦 Props</li>
            <li>🖱 Event Handling</li>
            <li>🎯 useState Hook</li>
            <li>🔄 useEffect Hook</li>
            <li>👀 Conditional Rendering</li>
            <li>📋 Rendering Lists using map()</li>
            <li>📝 Controlled Forms</li>
            <li>🛣 React Router DOM</li>
          </ul>
        </div>

        <div
          style={{
            marginTop: "25px",
            background: "#e0f2fe",
            padding: "18px",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "#0c4a6e" }}>🎯 Project Purpose</h2>

          <p
            style={{
              color: "#333",
              lineHeight: "1.8",
              fontSize: "16px",
            }}
          >
            The main purpose of this project is to help students manage their
            tasks effectively. Students can add tasks, organize them, monitor
            their progress, and improve productivity through a simple and
            responsive interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;