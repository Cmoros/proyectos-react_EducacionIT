import { CSSProperties, useState } from "react";

function CajaArcoiris() {
  const [mouseOver, setMouseOver] = useState(false);

  const style: CSSProperties = {
    width: 200,
    height: 200,
    backgroundColor: mouseOver ? "red" : "green",
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    ></div>
  );
}

function CajaArcoiris2() {
  const [BGColor, setBGColor] = useState("green");

  const style: CSSProperties = {
    width: 200,
    height: 200,
    backgroundColor: BGColor,
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setBGColor("red")}
      onMouseLeave={() => setBGColor("green")}
    ></div>
  );
}

// export default CajaArcoiris;
export default CajaArcoiris2;
