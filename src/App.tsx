import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="counter">Counter: {counter}</div>
      <div className="board">
        <Card label="Card1" counter={counter} />
        <Card label="Card2" counter={counter} />
      </div>
    </div>
  );
};

export default App;
