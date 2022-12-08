import { PropsWithChildren, FC } from "react";

interface Ejemplo2Props extends PropsWithChildren {
  test?: string;
}

const Ejemplo2: FC<Ejemplo2Props> = (props) => {
  console.log(props.children);
  return (
    <div>
      <h2>Todo</h2>
      <div className="flex flex-col">{props.children}</div>
    </div>
  );
};

export default Ejemplo2;
