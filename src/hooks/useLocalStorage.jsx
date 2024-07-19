import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValues) => {
    const [state, setState] = useState(defaultValues);
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, setState];
  };