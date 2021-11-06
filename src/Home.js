import React, { useState, useEffect } from "react";
import { Button, Header, Image } from "semantic-ui-react";
import Rock from "./assets/images/Rock.png";
import Scissors from "./assets/images/Scissors.png";
import Paper from "./assets/images/Paper.png";

function Home() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const choices = ["Rock", "Paper", "Scissors"];
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("Score");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  let buffer = [];
  buffer.push(
    <span>
      <Header as="h2" style={{ marginBottom: "10px", color: "#FED053" }}>
        {result}
      </Header>
      <Header as="h2" style={{ marginBottom: "10px", color: "#FED053" }}>
        Computer has chosen: {computerChoice} as a weapon.
      </Header>
      <Button
        style={{ marginTop: "10px", backgroundColor: "#FED053" }}
        onClick={() => setDisabled(false)}
      >
        Play again
      </Button>
    </span>
  );

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    localStorage.setItem("Score", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case "ScissorsPaper":
        case "RockScissors":
        case "PaperRock":
          setResult("YOU WIN!");
          setScore(score + 1);
          setDisabled(true);
          break;
        case "PaperScissors":
        case "ScissorsRock":
        case "RockPaper":
          setResult("YOU LOSE!");
          setScore(score - 1);
          setDisabled(true);
          break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
          setResult("ITS A DRAW!");
          setDisabled(true);
          break;
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <div style={{ marginTop: "20px" }}>
      <Button.Group size="big" style={{ marginBottom: "5%" }}>
        <Button
          style={{ backgroundColor: "#FED053" }}
          disabled={disabled}
          onClick={() => handleClick("Rock")}
        >
          <Image src={Rock} size="small" />
        </Button>
        <Button.Or style={{ marginTop: "10%" }} />
        <Button
          style={{ backgroundColor: "#FED053" }}
          disabled={disabled}
          onClick={() => handleClick("Scissors")}
        >
          <Image src={Scissors} size="small" />
        </Button>
        <Button.Or style={{ marginTop: "10%" }} />
        <Button
          style={{ backgroundColor: "#FED053" }}
          disabled={disabled}
          onClick={() => handleClick("Paper")}
        >
          <Image src={Paper} size="small" />
        </Button>
      </Button.Group>
      <Header as="h2" style={{ marginBottom: "20px", color: "#FED053" }}>
        Score: {score}
      </Header>
      <div>{disabled && buffer}</div>
    </div>
  );
}

export default Home;
