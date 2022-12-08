import { useState } from "react";

function Ejercicio2() {
  const [text, setText] = useState("");

  return (
    <div className="m-4 flex flex-col gap-2">
      <img src="https://picsum.photos/seed/picsum/300/200" alt="random" />
      <input
        type="text"
        placeholder="Buscar"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
}

export default Ejercicio2;
