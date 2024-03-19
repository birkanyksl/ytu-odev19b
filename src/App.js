import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("Deve");
  const [buttonText1, setButtonText1] = useState("Deve");
  const [buttonText2, setButtonText2] = useState("Cüce");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevState) => (prevState === "Deve 🐪" ? "Cüce 😛" : "Deve 🐪"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonText1((prevState) => (prevState === "Deve" ? "Cüce" : "Deve"));
      setButtonText2((prevState) => (prevState === "Cüce" ? "Deve" : "Cüce"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center vh-100">
      <h1 className="display-2 mt-5 mb-5 text-center">Deve Mi? Cüce Mi?</h1>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-2">{text}</h1>
          <div className="btn-group mt-5">
            <button
              type="button"
              className="btn btn-lg btn-danger mx-2"
              style={{ borderRadius: "10px", width: "200px" }}
            >
              {buttonText1}
            </button>
            <button
              type="button"
              className="btn btn-lg btn-danger mx-2"
              style={{ borderRadius: "10px", width: "200px" }}
            >
              {buttonText2}
            </button>
          </div>
        </div>
        <div className="scoreboard mt-3 border-top pt-3">
          <p className="mb-2">Skor: 🔻 </p>
          <div class="progress mt-2">
            <div
              class="progress-bar progress-bar-striped bg-success progress-bar-animated"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          <div class="progress mt-2">
            <div
              class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="10"
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
