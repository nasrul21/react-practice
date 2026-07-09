import { useEffect, useState } from "react";

export default function useLocalStorage(keyName, initialValue) {
  const initialState = () => {
    try {
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }

  const [state, setState] = useState(initialState);


  useEffect(() => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(state));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [keyName, state]);

  return [state, setState];
}
