import { FormEvent, useRef, useState } from "react";

const Formulario = () => {
  const [, setObjUser] = useState({});

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const updateName = () => {
    setObjUser((old) => ({
      ...old,
      [inputNameRef.current!.name]: inputNameRef.current!.value,
    }));
  };

  const updatePassword = () => {
    setObjUser((old) => ({
      ...old,
      [inputPasswordRef.current!.name]: inputPasswordRef.current!.value,
    }));
  };

  const sendInfo = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={sendInfo}>
        <input
          type="text"
          name="name"
          ref={inputNameRef}
          onChange={updateName}
        />
        <input
          type="pasword"
          name="password"
          ref={inputPasswordRef}
          onChange={updatePassword}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Formulario;
