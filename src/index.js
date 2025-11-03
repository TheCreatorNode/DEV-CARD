import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "green",
  },
  {
    skill: " JavaScript",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "Solidity",
    level: "Advanced",
    color: "blue",
  },
  {
    skill: "Clarity",
    level: "Beginner",
    color: "blue",
  },
  {
    skill: "React",
    level: "Beginner",
    color: "orange",
  },
  {
    skill: "Node js",
    level: "Beginner",
    color: "purple",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "violet",
  },
];

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillLIst />
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img src="./brght.jpg" alt="Bright Bassey" className="avatar" />;
};

const Intro = () => {
  return (
    <div>
      <h1>Bright Unwana Bassey</h1>
      <p>
        {" "}
        Full-stack web developer and blockchain mentor cohortIII @ COLAB. When
        not coding, I like to play board games or go for a walk/run, or watch a
        SCI-FI movie/series, I love cartoons too.
      </p>
    </div>
  );
};

const SkillLIst = () => {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill skillObj={s} key={s.skill} />
      ))}
    </div>
  );
};

const Skill = ({ skillObj }) => {
  const advance = "advanced";
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <>
        {skillObj.level == advance ? (
          <span>💪</span>
        ) : skillObj.level == "intermediate" ? (
          <span>👍</span>
        ) : (
          <span>👶</span>
        )}
      </>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
