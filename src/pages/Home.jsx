import React from "react";

const Home = () => {
  const today = new Date();

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
          background: "#fff",
          width: "100%",
          maxWidth: "750px",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            color: "#2563eb",
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
          📚 Student Task Manager
        </h1>

        <h2
          style={{
            color: "#444",
            marginBottom: "25px",
          }}
        >
          Welcome, Student 👋
        </h2>

        <div
          style={{
            background: "#eff6ff",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        >
          <h3 style={{ color: "#1d4ed8" }}>
            📅 Today's Date
          </h3>

          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {`${today.getDate()} - ${
              today.getMonth() + 1
            } - ${today.getFullYear()}`}
          </p>
        </div>

        <p
          style={{
            color: "#555",
            lineHeight: "1.8",
            fontSize: "17px",
            marginBottom: "30px",
          }}
        >
          Welcome to the <strong>Student Task Manager</strong>! This application
          helps you organize your daily tasks, keep track of your assignments,
          and manage your work efficiently. Stay focused, complete your tasks on
          time, and improve your productivity.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#dbeafe",
              padding: "20px",
              borderRadius: "12px",
              width: "180px",
            }}
          >
            <h2 style={{ margin: 0 }}>📝</h2>
            <h3 style={{ color: "#2563eb" }}>Add Tasks</h3>
            <p style={{ color: "#555", fontSize: "15px" }}>
              Create and manage your daily tasks easily.
            </p>
          </div>

          <div
            style={{
              background: "#dcfce7",
              padding: "20px",
              borderRadius: "12px",
              width: "180px",
            }}
          >
            <h2 style={{ margin: 0 }}>✅</h2>
            <h3 style={{ color: "#15803d" }}>Track Progress</h3>
            <p style={{ color: "#555", fontSize: "15px" }}>
              Mark tasks as completed and stay productive.
            </p>
          </div>

          <div
            style={{
              background: "#fef3c7",
              padding: "20px",
              borderRadius: "12px",
              width: "180px",
            }}
          >
            <h2 style={{ margin: 0 }}>🎯</h2>
            <h3 style={{ color: "#d97706" }}>Stay Organized</h3>
            <p style={{ color: "#555", fontSize: "15px" }}>
              Plan your work and achieve your academic goals.
            </p>
          </div>
        </div>

        <button
          style={{
            marginTop: "35px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 28px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🚀 Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;