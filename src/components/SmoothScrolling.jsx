import ReactLenis from "@studio-freight/react-lenis";
import React from "react";

const SmoothScrolling = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.2, duration: 1, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
