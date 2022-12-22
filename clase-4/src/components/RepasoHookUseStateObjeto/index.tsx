import { FormEvent, useState } from "react";

const RepasoHookUseStateObjeto = () => {
  const [objeto, setObjeto] = useState({name: "Algo"});

  const inputNameRef = useRef();

  const guardarNobre = (event : FormEvent) => {
    if (!(event.target instanceof HTMLFormElement)) return;

    event.preventDefault()
  }

  return (
    <div></div>
  )
}

export default RepasoHookUseStateObjeto;