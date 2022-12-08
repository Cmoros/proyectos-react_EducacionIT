import { CSSProperties, useState } from "react";

function CajaArcoiris() {
  const [mouseOver, setMouseOver] = useState(false);

  const style : CSSProperties = {
    width: 200,
    height: 200,
    backgroundColor: mouseOver ? "red" : "green",
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}></div>
  );
}

export default CajaArcoiris;
