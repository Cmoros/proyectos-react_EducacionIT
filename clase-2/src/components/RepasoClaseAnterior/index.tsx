import { CSSProperties, useState } from "react";

const RepasoClaseAnterior = () => {
  const [counter, setCounter] = useState(0);
  // const style: CSSProperties = {
  //   height: 300,
  //   width: 300,
  //   backgroundColor: "red",
  // };

  const countClicks = () => {
    setCounter(counter + 1);
  };
  return (
    <div
      /* style={style} */ onClick={countClicks}
      className="h-52 w-52 bg-red-400"
    >
      {counter}
    </div>
  );
};

export default RepasoClaseAnterior;
