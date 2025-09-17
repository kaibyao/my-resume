import { useEffect, useRef } from "react";

export function useRequestAnimationFrame(onFrameUpdate: () => unknown) {
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(onFrameUpdate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onFrameUpdate]);
}
