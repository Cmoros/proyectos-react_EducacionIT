import { useState } from "react";

const useLocalStorage = <T>(
  variableName: string,
  initialValue: T
): [T, (newValue: T) => void] => {
  let localStorageList: T = JSON.parse(
    localStorage.getItem(variableName) as string
  );
  if (!localStorageList) {
    localStorage.setItem(variableName, JSON.stringify(initialValue));
    localStorageList = initialValue;
  }
  const [list, setList] = useState(localStorageList);

  const setListAndUpdate = (newValue: T) => {
    setList(newValue);
    localStorage.setItem(variableName, JSON.stringify(newValue));
  };

  return [list, setListAndUpdate];
};

export default useLocalStorage;
