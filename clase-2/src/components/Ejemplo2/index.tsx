import { PropsWithChildren } from "react";

function Ejemplo2(props: PropsWithChildren) {
  console.log(props.children);
  return (
    <div>
      <h2>Todo</h2>
      <div className="flex flex-col">{props.children}</div>
    </div>
  );
}

export default Ejemplo2;
