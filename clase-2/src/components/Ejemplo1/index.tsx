import React from "react";

const Ejemplo1 = () => {
  return (
    <div>
      <div>1</div>
      <div>2</div>
    </div>
  );
};

const Ejemplo1B = () => {
  return (
    <React.Fragment>
      <div>1</div>
      <div>2</div>
    </React.Fragment>
  );
};

const Ejemplo1C = () => {
  return (
    <>
      <div>1</div>
      <div>2</div>
    </>
  );
};

export { Ejemplo1, Ejemplo1B, Ejemplo1C };
