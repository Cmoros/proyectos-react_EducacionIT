import InputConMensaje from "components/InputConMensaje";
import { useState } from "react";

const FormularioConComponentes = () => {
  const [user, setUser] = useState({});

  const updateUserByName = (name: string, value: string) => {
    setUser((old) => ({ ...old, [name]: value }));
  };

  return (
    <div>
      <form action="">
        <InputConMensaje setValor={updateUserByName} />
      </form>
    </div>
  );
};

export default FormularioConComponentes;
