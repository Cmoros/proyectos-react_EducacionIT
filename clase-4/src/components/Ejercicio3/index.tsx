import { FormEvent, useState } from "react";

const Ejercicio3 = () => {
  const [user, setUser] = useState({
    nombre: "",
    nickname: "",
    contrasena: "",
  });

  const updateUser = (e: FormEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLInputElement)) return;
    setUser((old) => ({ ...old, [target.name]: target.value }));
  };

  return (
    <div>
      <form
        action=""
        method="post"
        autoComplete="off"
        className="flex flex-col gap-4"
      >
        <label>
          Nombre
          <input type="text" name="nombre" onChange={updateUser} />
        </label>
        <label>
          Nickname
          <input type="text" name="nickname" onChange={updateUser} />
        </label>
        <label>
          Contraseña
          <input type="text" name="contrasena" onChange={updateUser} />
        </label>
        <input
          type="submit"
          value="Enviar"
          className="border-4 border-red-500 p-2"
        />
      </form>
    </div>
  );
};

/*

Crear un formulario con tres campos; nombre, nickname, contraseña.

Guardar todo en un solo HOOK-UseState del tipo objeto.
*/

export default Ejercicio3;
