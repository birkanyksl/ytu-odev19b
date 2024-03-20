import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("Deve");
  const [score, setScore] = useState(1);
  const [mistakes, setMistakes] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");

  const playGame = (userChoice) => {
    if (gameOver) return;

    const choice = ["Deve", "Cüce"];
    const computerChoice = choice[Math.floor(Math.random() * 2)];

    console.log("Kullanıcının seçimi:", userChoice);
    console.log("Bilgisayarın seçimi:", computerChoice);

    if (userChoice === computerChoice) {
      console.log("Doğru cevap!");
      setScore((prevScore) => prevScore + 1);
    } else {
      console.log("Yanlış cevap!");
      setMistakes((prevMistakes) => prevMistakes + 1);
    }
  };

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setText((prevState) =>
          prevState === "Deve 🐪" ? "Cüce 😛" : "Deve 🐪"
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [gameOver]);

  useEffect(() => {
    if (score === 5) {
      setGameOver(true);
      setGameResult("Kazandınız 🏆");
    } else if (mistakes === 5) {
      setGameOver(true);
      setGameResult("Kaybettiniz 😞");
    }
  }, [score, mistakes]);

  const restartGame = () => {
    setScore(1);
    setMistakes(1);
    setGameOver(false);
    setGameResult("");
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center vh-100">
      <h1 className="display-2 mt-5 mb-5 text-center">Deve Mi? Cüce Mi?</h1>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-2">{!gameOver ? text : ""}</h1>
          {gameOver ? (
            <>
              <h2>{gameResult}</h2>
              <button
                type="button"
                className="btn btn-lg btn-outline-danger mt-5"
                onClick={restartGame}
              >
                Yeniden Başlat
              </button>
            </>
          ) : (
            <div className="btn-group mt-5">
              <button
                type="button"
                className="btn btn-lg btn-danger mx-2"
                style={{ borderRadius: "10px", width: "200px" }}
                onClick={() => playGame("Deve")}
              >
                Deve
              </button>
              <button
                type="button"
                className="btn btn-lg btn-danger mx-2"
                style={{ borderRadius: "10px", width: "200px" }}
                onClick={() => playGame("Cüce")}
              >
                Cüce
              </button>
            </div>
          )}
        </div>
        <div className="scoreboard mt-3 border-top pt-3">
          <p className="mb-2">Puanınız: </p>
          <div className="progress mt-2">
            <div
              className="progress-bar progress-bar-striped bg-success progress-bar-animated"
              role="progressbar"
              style={{ width: `${score * 20}%` }}
              aria-valuenow={score * 20}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress mt-2">
            <div
              className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
              role="progressbar"
              style={{ width: `${mistakes * 20}%` }}
              aria-valuenow={mistakes * 20}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
