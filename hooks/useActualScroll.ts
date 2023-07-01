import { useEffect, useState } from "react";

export default function useCountSkroll() {
  const [scrollActualCount, setScrollActualCount] = useState(0);
  useEffect(() => {
    const options = { passive: true }; // options must match add/remove event
    const scroll = () => {
      const { scrollY } = window;
      setScrollActualCount(scrollY);
    };
    document.addEventListener("scroll", scroll, options);
    // remove event on unmount to prevent a memory leak
    () => document.removeEventListener("scroll", scroll);
  }, []);

  return { scrollActualCount };
}
