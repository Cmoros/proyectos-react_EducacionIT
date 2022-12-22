import { FC, useState } from "react";

interface PropsItemLista {
  id: string;
  detalle: string;
  onClick: (id: string) => void;
}

const ItemLista: FC<PropsItemLista> = ({ id, detalle, onClick }) => {
  return (
    <li
      onClick={(e) => {
        console.log((e.target as typeof e.target & { id: string }).id);
        onClick(id);
      }}
      id={`lista-item--${id}`}
    >
      {detalle}
    </li>
  );
};

type ArrayState = PropsItemLista[];

const ListaDeTareas: FC = () => {
  const markCompletedItem = (id: string) => {
    setArray((old) => old.filter((item) => item.id !== id));
  };

  const [array, setArray] = useState<ArrayState>([
    { id: "0", detalle: "Algo 1", onClick: markCompletedItem },
    { id: "1", detalle: "Algo 2", onClick: markCompletedItem },
    { id: "2", detalle: "Algo 3", onClick: markCompletedItem },
    { id: "3", detalle: "Algo 4", onClick: markCompletedItem },
  ]);

  const [id, setId] = useState(4);

  function addNewToDo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      "0": HTMLInputElement;
    };
    const newToDo = target[0].value;
    target[0].value = "";
    setArray((old) => [
      ...old,
      {
        id: "" + id,
        detalle: newToDo,
        onClick: markCompletedItem,
      },
    ]);
    setId((old) => old + 1);
  }

  return (
    <div>
      <ul>
        {array.map(({ id, detalle, onClick }) => (
          <ItemLista
            onClick={onClick}
            id={id}
            detalle={detalle}
            key={id + detalle}
          />
        ))}
      </ul>
      <form action="" onSubmit={addNewToDo}>
        <input type="text" />
        <button>Agregar ToDo</button>
      </form>
    </div>
  );
};

export default ListaDeTareas;
