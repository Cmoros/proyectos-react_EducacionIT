import { useState } from "react";

const Ejercicio1 = () => {
  const [counter, setCounter] = useState(0);

  const countClicks = () => {
    setCounter(counter + 1);
  };

  return (
    <div
      className={`h-52 w-52 ${counter % 2 ? "bg-red-500" : "bg-green-500"}`}
      onClick={countClicks}
    >
      {counter}
    </div>
  );
};

export default Ejercicio1;
