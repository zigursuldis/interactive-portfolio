import { RefObject, useEffect, useState } from "react";

export default function useElementCoordinates(ref: RefObject<HTMLElement>) {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0, x2: 0, y2: 0 });

  useEffect(() => {
    const getCoordinates = () => {
      const rect = ref?.current?.getBoundingClientRect();
      return {
        x: (rect?.left || 0) + window.scrollX,
        x2: (rect?.right || 0) + window.scrollX,
        y: (rect?.top || 0) + window.scrollY,
        y2: (rect?.bottom || 0) + window.scrollY,
      };
    };

    const handleScrollOrResize = () => {
      setCoordinates(getCoordinates());
    };

    if (ref.current) {
      setCoordinates(getCoordinates());
    }

    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [ref]);
  return coordinates;
}
