/* Crear un hook useState del tipo numerico que tengo una funcion para;
1) Que devuelva true si el valor es positivo, y false si es negativo.
2) Que devuelva true si es par, y false si es impar.

*/

import { useState } from "react";

export default function useNumber(initialValue: number) {
  const [num, setNum] = useState(initialValue);

  

  const isPositive = () => num >= 0;
  const isEven = () => num % 2 === 0;

  return [num, setNum, isPositive, isEven];
}
