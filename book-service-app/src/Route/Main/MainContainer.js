import React, { useEffect, useRef, useState } from "react";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  const [show, setShow] = useState(false);
  const textRef = useRef();
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      textRef.current.style.position = "absolute";
      textRef.current.style.cursor = "default";
      textRef.current.style.left = e.clientX + 20 + "px";
      textRef.current.style.top = e.clientY - 10 + "px";
    });
  });
  return <MainPresenter show={show} setShow={setShow} textRef={textRef} />;
};

export default MainContainer;
