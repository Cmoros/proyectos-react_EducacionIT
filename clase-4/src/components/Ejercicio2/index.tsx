import { useEffect, useRef } from "react";

const Ejercicio2 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const maxLenRef = useRef<HTMLLIElement>(null);
  const startWNumRef = useRef<HTMLLIElement>(null);
  const specialCharRef = useRef<HTMLLIElement>(null);

  const checkRef = () => {
    if (!(inputRef.current instanceof HTMLInputElement)) return;
    const text = inputRef.current.value;
    if (text.length <= 6) {
      maxLenRef.current!.className = "bg-green-700";
    }
    if (!/\d/.test(text[0])) {
      startWNumRef.current!.className = "bg-green-700";
    }
    if (["*", "-", "_"].every((char) => text.includes(char))) {
      specialCharRef.current!.className = "bg-green-700";
    }
  };

  return (
    <form>
      <input type="text" ref={inputRef} onChange={checkRef} />
      {/* <input type="submit" value="Comprobar" /> */}
      <ul>
        <li ref={maxLenRef} className="bg-red-700">Tiene que tener mas de 6 caracteres</li>
        <li ref={startWNumRef} className="bg-red-700">Comenzar con un numero</li>
        <li ref={specialCharRef} className="bg-red-700">
          Incluir al menos uno de estos caracteres especiales; *, -, _
        </li>
      </ul>
    </form>
  );
};

/*

Controlar el nombre ingresado por el usuario;
- Tiene que tener mas de 6 caracteres.
- Comenzar con un numero.
- incluir al menos uno de estos caracteres especiales; *, -, _.

NOTA:
Utilizar la funcio include para determianr si tiene o no los caracteres.
*/

export default Ejercicio2;
