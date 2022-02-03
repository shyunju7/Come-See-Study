import React, { useEffect, useRef } from "react";
import { GlobalStyle } from "./GlobalStyle";
import AppRouter from "./Router";

function App() {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (textRef.current) {
      textRef.current.style.left = e.clientX + 20 + "px";
      textRef.current.style.top = e.clientY - 10 + "px";
    } else return;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <GlobalStyle />
      <AppRouter textRef={textRef} />
    </div>
  );
}

export default App;
