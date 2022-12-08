import { FC, useState } from "react";

const Subcomponente: FC = () => {
  return (
    <div className="item-lista-simple__tapa">
      <button>Modificar</button>
    </div>
  );
};

interface ItemListProps {
  detalle: string;
  key: string;
}

const ItemListaSimple: FC<ItemListProps> = (props) => {
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
