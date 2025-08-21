import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

interface ExcerciseProps {
  todos: Todo[];
  children?: React.ReactNode;
}

// Exercise 1: Todo List
const Excercise1: React.FC<ExcerciseProps> = ({ todos, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <h2>Todo List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.length === 0 ? (
          <li>No todos available.</li>
        ) : (
          todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
        )}
      </ul>
      <div>{children}</div>
    </div>
  );
};

// Exercise 2: JSX Mastery (renamed from Exercise 3)
const Excercise2: React.FC = () => {
  const user = {
    name: "John",
    age: 25,
    isActive: true,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
      }}
    >
      <h2>JSX Mastery Exercise</h2>
      <div style={{ textAlign: "center" }}>
        <h3>User Profile</h3>
        <div className="user-info" style={{ marginBottom: "20px" }}>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Age:</strong> {user.age}
          </p>
          {user.isActive && (
            <span
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              ✅ Active User
            </span>
          )}
        </div>
        <img
          src="https://via.placeholder.com/100x100/007bff/ffffff?text=User"
          alt="User avatar"
          style={{
            borderRadius: "50%",
            marginTop: "10px",
            border: "2px solid #007bff",
          }}
        />
      </div>
    </div>
  );
};

// Main Exercise Container with Navigation
const ExcerciseContainer: React.FC<ExcerciseProps> = ({ todos, children }) => {
  const [currentExercise, setCurrentExercise] = useState(1);

  const renderExercise = () => {
    switch (currentExercise) {
      case 1:
        return <Excercise1 todos={todos}>{children}</Excercise1>;
      case 2:
        return <Excercise2 />;
      default:
        return <div>Select an exercise</div>;
    }
  };

  const buttonStyle = (isActive: boolean) => ({
    marginRight: "10px",
    backgroundColor: isActive ? "#007bff" : "#f8f9fa",
    color: isActive ? "white" : "#333",
    border: "1px solid #ccc",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: isActive ? "bold" : "normal",
    transition: "all 0.2s ease",
  });

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        🚀 React Learning Exercises
      </h1>

      {/* Navigation buttons - Updated to show Exercise1 and Exercise2 */}
      <nav style={{ marginBottom: "30px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentExercise(1)}
          style={buttonStyle(currentExercise === 1)}
        >
          Exercise1
        </button>
        <button
          onClick={() => setCurrentExercise(2)}
          style={buttonStyle(currentExercise === 2)}
        >
          Exercise2
        </button>
      </nav>

      {/* Current exercise content */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {renderExercise()}
      </div>
    </div>
  );
};

export default ExcerciseContainer;
