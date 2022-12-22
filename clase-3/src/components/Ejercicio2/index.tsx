import { FC, ReactNode } from "react";

interface Ejercicio2Props {
  children: ReactNode;
}

const Ejercicio2: FC<Ejercicio2Props> = (props) => {
  return <div className="grid grid-cols-3 gap-2">{props.children}</div>;
};

export default Ejercicio2;
