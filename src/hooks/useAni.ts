import { useState } from "react";

export const useAni = (duration: number) => {
  const [active, setActive] = useState(false);

  const start = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, duration);
  };

  return { active, start, duration };
};
