import React from "react";
import { Link } from "react-router-dom";

const DASHBOARD_PATH = "/tasks";

const sampleTasks = [
  { name: "Finish React assignment", category: "Study", priority: "high" },
  { name: "Practice React hooks", category: "Coding", priority: "medium" },
  { name: "Evening walk", category: "Health", priority: "low" },
];

const features = [
  {
    title: "Add tasks in seconds",
    text: "Enter a title, pick a category and a priority, and the task appears on your board straight away.",
    bar: "",
  },
  {
    title: "Track what is done",
    text: "Mark tasks as complete or remove them, so your board only shows the work that is still pending.",
    bar: "pg-card-bar--green",
  },
  {
    title: "Focus on priorities",
    text: "High, medium and low priority colours make it clear what to work on first.",
    bar: "pg-card-bar--yellow",
  },
];

const Home = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="pg">
      <section className="pg-hero">
        <div>
          <span className="pg-date">{today}</span>
          <h1>Plan your study week and finish what matters.</h1>
          <p className="pg-lead">
            SmartTask keeps assignments, coding practice and personal goals in
            one place, so you always know what to do next.
          </p>
          <div className="pg-actions">
            <Link to={DASHBOARD_PATH} className="pg-btn pg-btn--primary">
              Open dashboard
            </Link>
            <Link to="/about" className="pg-btn pg-btn--ghost">
              About the project
            </Link>
          </div>
        </div>

        <div className="pg-preview" aria-label="Example task board">
          <p className="pg-preview-title">Today's tasks</p>
          {sampleTasks.map((task) => (
            <div key={task.name} className={`pg-task pg-task--${task.priority}`}>
              <div>
                <p className="pg-task-name">{task.name}</p>
                <p className="pg-task-meta">{task.category}</p>
              </div>
              <span className={`pg-badge pg-badge--${task.priority}`}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Built for a student's day</h2>
        <p className="pg-lead">
          Everything you need to stay on top of your work, with nothing extra to
          learn.
        </p>
        <div className="pg-grid">
          {features.map((f) => (
            <article className="pg-card" key={f.title}>
              <div className={`pg-card-bar ${f.bar}`} />
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;