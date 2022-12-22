import { useEffect, useState } from "react";

const EjemploHookUseEffect = () => {
  const [contadorFases, setContadorDeFases] = useState(0);
  const [permitir, setPermitir] = useState(false);

  // ComponentDidMount
  useEffect(() => {
    console.log("componentDidMount", contadorFases);
  }, []);

  // ComponentDidMount
  useEffect(() => {
    console.log("componentDidUpdate", contadorFases);
  });

  useEffect(() => {
    console.log("componentDidUpdate con dependencia", contadorFases);
  }, [permitir]);

  return (
    <div>
      <p>Cantidad de fases pasadas: {contadorFases}</p>
      <button onClick={() => setContadorDeFases((old) => old + 1)}>
        Sumar 1
      </button>
      <p>Permisos: {permitir ? "Permitido" : "No permitido"}</p>
      <button onClick={() => setPermitir((old) => !old)}>
        Cambiar permisos
      </button>
    </div>
  );
};

export default EjemploHookUseEffect;
