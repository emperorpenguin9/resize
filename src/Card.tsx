import { useMemo } from "react";

const Card: React.FC<{
  label: string;
  counter: number;
}> = ({ label, counter }) => {
  // Generate random number between 2 and 6
  const randNum: number = useMemo<number>(
    () => Math.floor(Math.random() * 5 + 2),
    []
  );
  const factor: boolean = counter === randNum;

  return (
    <div className={`card ${factor ? "active" : ""} `}>
      {label} : {randNum}
    </div>
  );
};

export default Card;
