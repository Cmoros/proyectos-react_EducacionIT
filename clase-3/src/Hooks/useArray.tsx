import { useState } from "react";

function useArray(initialValue: any[]) {
  const [array, setArray] = useState(initialValue);

  const invertir = () => {
    return array.reverse();
  };

  return [array, setArray, invertir];
}

export default useArray;
