import { useState, useEffect } from "react";

export const useMousePosition = () => {
  const [mousePos, setMousePos] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return mousePos;
};
