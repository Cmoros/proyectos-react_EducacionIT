import { FormEvent, useRef } from "react";

const Ejercicio1 = () => {
  const refPassword = useRef<HTMLInputElement>(null);
  const liLenRef = useRef<HTMLLIElement>(null);

  const handleCheckPassword = (e: FormEvent) => {
    if (!(e.target instanceof HTMLFormElement)) return;
    const text = e.target.innerText;
    if (/^[A-Z].{6,10}[\d]$/.test(text)) {
      alert("Válido");
      return;
    }
    alert("No válido");
    return;
  };

  return (
    <form action="" onSubmit={handleCheckPassword}>
      <input type="password" ref={refPassword} />
      <input type="submit" value="Comprobar" />
      <ul>
        <li ref={liLenRef}>Tiene que tener entre 8 y 12 caracteres</li>
        <li></li>
      </ul>
    </form>
  );
};

export default Ejercicio1;
