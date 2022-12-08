import { MouseEvent, useState } from "react";

const style = {
  backgroundColor: "red",
  height: 200,
  width: 200,
  margin: "auto",
};

function CajaDeCoordenadas() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mostrarCoordenadas = (event: MouseEvent) => {
    const newX = event.clientX;
    const newY = event.clientY;
    setX(newX);
    setY(newY);
  };

  return (
    <div
      onMouseMove={(e) => {
        mostrarCoordenadas(e);
      }}
      style={style}>
      {x} - {y}
    </div>
  );
}

export default CajaDeCoordenadas;
