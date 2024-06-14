import { useEffect } from "react";

const useResizeEffect = (fieldRef, setRectangles) => {
  useEffect(() => {
    const handleResize = () => {
      if (fieldRef.current) {
        const fieldRect = fieldRef.current.getBoundingClientRect();
        setRectangles((prev) =>
          prev.map((rect) => ({
            ...rect,
            x: (rect.xPercent / 100) * fieldRect.width,
            y: (rect.yPercent / 100) * fieldRect.height,
          }))
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fieldRef, setRectangles]);
};

export default useResizeEffect;
