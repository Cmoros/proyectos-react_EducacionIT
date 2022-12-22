import { FC, useState } from "react";

const EjemploHookUseStateTipoArray: FC = () => {
  const [friend, setFriend] = useState("");
  const [array, setArray] = useState([
    "Manuel",
    "Jonathan",
    "Guillermo",
    "Damian",
  ]);

  const addNewFriend = () => {
    setArray((old) => {
      // old.push(friend);
      // return old;
      return [...old, friend];
    });
  };

  const deleteFriend = () => {
    setArray((old) => old.filter((name) => name !== friend));
  };

  const reverseFriends = () => {
    setArray((old) => [...old].reverse());
    // setArray((old) => [...old.reverse()]); // No funciona
  };

  console.log("rerendered");

  return (
    <div>
      <h3>Lista de amigos</h3>
      <ul>
        {array.map((friend, i) => (
          <li key={"friend" + i}>{friend}</li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setFriend(e.target.value)} />
      <button className="p-3" onClick={addNewFriend}>
        Agregar
      </button>
      <button className="p-3" onClick={deleteFriend}>
        Eliminar
      </button>
      <button className="p-3" onClick={reverseFriends}>
        Invertir
      </button>
    </div>
  );
};

export default EjemploHookUseStateTipoArray;
