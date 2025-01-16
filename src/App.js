import { useState } from "react";
import './App.css';

function Key({ label, clickHandler, className }) {
  return (
    <button onClick={(e) => clickHandler(e, label)} className={className}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return (
    <div className="Display">
      {value}
    </div>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState("C-PEITEL3 EXPECTATIONS");

  const clickHandler = (e, value) => {
    e.preventDefault();
    
    const items = [
      "Having A Strong Work Ethic",
      "Being On Time",
      "Making An Effort",
      "Being High Energy",
      "Having A Positive Attitude",
      "Being Passionate",
      "Using Good Body Language",
      "Being Coachable",
      "Doing A Little Extra",
      "Being Prepared"
    ];

    if (value === "RESET") {
      setDisplayValue("10 Things That Require Zero Talent");
    } else if (value === "NAME") {
      setDisplayValue("ERNZ DANIELLE MANALO");
    } else if (value === "What I learned?") {
      setDisplayValue("I learned about deploying to Vercel, gained a basic understanding of React, explored the fundamentals of Full-Stack development, and learned how to effectively use Trello for project management.")
    } else if (value === "What I want to learn?") {
      setDisplayValue("I want to deepen my understanding of Web Development and explore its intricacies. My goal is to create more fluid and dynamic websites that offer seamless user experiences. I aim to enhance my skills in responsive design, advanced development techniques, and modern tools to craft visually appealing and highly functional websites.")
    } else if (value === "How will I learn?") {
      setDisplayValue("I can achieve these goals by dedicating time and passion to learning and understanding these topics. Actively participating in class and being fully present will also play a crucial role in my success.")
    } else if (!isNaN(value)) {
      const index = parseInt(value);
      if (index >= 0 && index < items.length) {
        setDisplayValue(items[index]);
      }
    }
  };

  return (
    <div className="App">
      <h1 className="Head">ERNZ DANIELLE MANALO - IT3A</h1>
      <div className="Calc">
        <div className="Dsply">
          <Display value={displayValue} />
        </div>

        <div className="Bttns">
          <Key label={"What I learned?"} clickHandler={clickHandler} className="surname" />
          <Key label={"What I want to learn?"} clickHandler={clickHandler} className="surname" />
          <Key label={"How will I learn?"} clickHandler={clickHandler} className="surname" />
          <Key label={7} clickHandler={clickHandler} />
          <Key label={8} clickHandler={clickHandler} />
          <Key label={9} clickHandler={clickHandler} />
          <Key label={4} clickHandler={clickHandler} />
          <Key label={5} clickHandler={clickHandler} />
          <Key label={6} clickHandler={clickHandler} />
          <Key label={1} clickHandler={clickHandler} />
          <Key label={2} clickHandler={clickHandler} />
          <Key label={3} clickHandler={clickHandler} />
          <Key label={"RESET"} clickHandler={clickHandler} className="extra" />
          <Key label={0} clickHandler={clickHandler} />
          <Key label={"NAME"} clickHandler={clickHandler} className="extra" />
        </div>
      </div>
    </div>
  );
}

export default App;
