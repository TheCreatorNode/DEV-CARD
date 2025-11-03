import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Skill skill="HTML+CSS" emoji="💪" color="green" />
      <Skill skill="JavaScript" emoji="💪" color="red" />
      <Skill skill="Solidity" emoji="💪" color="blue" />
      <Skill skill="Clarity" emoji="👶" color="blue" />
      <Skill skill="REACT" emoji="👶" color="orange" />
      <Skill skill="NODE JS" emoji="👶" color="purple" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
