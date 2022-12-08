import { useState } from "react";

interface props {
  detalle: string;
  key: string;
}

const Subcomponente = () => {
  return (
    <div className="item-lista-simple__tapa">
      <button>Modificar</button>
    </div>
  );
};

const ItemListaSimple = (props: props) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div
      className="item-lista-simple"
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
    >
      {mostrar ? <Subcomponente /> : null}
      <p className="item-lista-simple__text">{props.detalle}</p>
    </div>
  );
};

export default ItemListaSimple;
