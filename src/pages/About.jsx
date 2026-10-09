import React from "react";

const stack = [
  {
    title: "Core setup",
    items: ["React", "Vite", "React Router DOM", "JSX"],
  },
  {
    title: "Components",
    items: ["Functional components", "Props", "Component reusability"],
  },
  {
    title: "State and effects",
    items: ["useState", "useEffect", "Event handling", "Controlled forms"],
  },
  {
    title: "Rendering",
    items: ["Conditional rendering", "Lists with map()"],
  },
];

const About = () => {
  return (
    <main className="pg">
      <section className="pg-about-head">
        <h1>SmartTask</h1>
        <p className="pg-author">Developed by Kajal</p>
        <p className="pg-lead">
          A student task manager built with React. It helps students organise
          their daily tasks. You can add, update and track your work from a
          clean, responsive interface that works on both desktop and mobile.
        </p>
      </section>

      <section>
        <h2>Tech stack and concepts</h2>
        <p className="pg-lead">
          The project covers the core building blocks of a modern React app.
        </p>
        <div className="pg-stack-grid">
          {stack.map((group) => (
            <div className="pg-card pg-stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="pg-chips">
                {group.items.map((item) => (
                  <span className="pg-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pg-split">
        <div className="pg-card">
          <h2>Project purpose</h2>
          <p>
            Students often juggle assignments, revision and deadlines at the
            same time. This app gives them one simple place to add tasks,
            organise them, monitor progress and stay productive.
          </p>
        </div>
        <div className="pg-card">
          <h2>What you can do</h2>
          <ul className="pg-list">
            <li>Add tasks with a category and priority</li>
            <li>Mark tasks as completed</li>
            <li>Delete tasks you no longer need</li>
            <li>Use it comfortably on any screen size</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;