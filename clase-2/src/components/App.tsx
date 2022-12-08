// import { Ejemplo1B } from "./Ejemplo1";
// import Ejercicio1 from "./Ejercicio1";
import { FC } from "react";
import Ejemplo2 from "./Ejemplo2";
import Ejercicio2 from "./Ejercicio2";
import ItemListaSimple from "./ItemLista";
// import RepasoClaseAnterior from "./RepasoClaseAnterior";

const json = [
  { detalle: "Hacer las compras" },
  { detalle: "Ir al dentista" },
  { detalle: "Sacar al perro" },
  { detalle: "Buscar la ropa al lavadero" },
  { detalle: "Hacer las compras 5" },
];

const App: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* <RepasoClaseAnterior />
      <Ejercicio1 />
      <Ejemplo1B /> */}
      <Ejercicio2 />
      <Ejemplo2>
        {json.map((item, index) => (
          <ItemListaSimple key={`item-${index}`} detalle={item.detalle} />
        ))}
      </Ejemplo2>
    </div>
  );
};

export default App;
