import useLocalStorage from "hooks/useLocalStorage";
import ListaDeApellidos from "./ListaDeApellidos";
import ListaDeNombres from "./ListaDeNombres";

const listaContacts = [
  { nombre: "Carla", apellido: "Kiroga" },
  { nombre: "Cesar", apellido: "Moros" },
  { nombre: "Damian", apellido: "Cabrera" },
];

function App() {
  const [list, setList] = useLocalStorage("contactList", listaContacts);
  const [num, setNum] = useLocalStorage("number", 0);

  function addContact(
    newContact = {
      nombre: "Nombre",
      apellido: "Apellido",
    }
  ) {
    setList([...list, newContact]);
  }

  return (
    <div className="bg-white">
      <div className="">
        <div className="m-auto flex w-1/2 flex-col justify-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Clase 6
          </h2>
          <button onClick={() => addContact()}>Agregar</button>
          <div>
            <ListaDeNombres lista={list} />
            <ListaDeApellidos lista={list} />
          </div>
          <div>
            <p>Contador actual: {num}</p>
            <button onClick={() => setNum(num + 1)}>Sumar 1</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
