import { useState } from "react";

interface IProps {
  show: boolean;
  children: React.ReactNode;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, show, setShow }: IProps) => {
  if (!show) return null;

  return (
    <div className="w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center fixed gap-2 top-0">
      <div className="rounded p-3 h-1/3 w-1/3 bg-white">
        {children}
        <button className="border-4 rounded-md bg-gray-400 py-2 px-3" onClick={() => setShow(false)}>Aceptar</button>
      </div>
    </div>
  );
};

export default Modal;
