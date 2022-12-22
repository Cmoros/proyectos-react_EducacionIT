import { useState } from "react";
import EjemploHookUseEffect from "./EjemploHookUserEffect";
import Modal from "./Modal";
import TarjetaPost from "./TarjetaPost";
import TarjeteroPost from "./TarjeteroPost";


function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`box-border flex min-h-screen w-screen flex-col items-center justify-center gap-2 ${
        show ? "h-screen overflow-hidden" : ""
      }`}
    >
      {/* <button
        className="border-4 rounded bg-gray-400 py-2 px-3"
        onClick={() => setShow(true)}
      >
        Mostrar modal
      </button>
      <Modal show={show} setShow={setShow}>
        <p>Esto es un modal</p>
      </Modal> */}
      {/* <TarjetaPost post={json} /> */}
      <TarjeteroPost />
      {/* <EjemploHookUseEffect /> */}
    </div>
  );
}

export default App;
