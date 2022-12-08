import { useState } from "react";

function BotonContador() {
  let contador = 0;

  const [contadorHook, setContadorHook] = useState(0);

  const contandoClicks = () => {
    setContadorHook(contadorHook + 1);
    contador++;
    console.log("Contador", contador);
    console.log("Contador Hook", contadorHook);
  };

  return (
    <button onClick={contandoClicks}>
      CLICK ME - {contador} - {contadorHook}
    </button>
  );
}

export default BotonContador;
