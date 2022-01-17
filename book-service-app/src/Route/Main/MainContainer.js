import React, { useEffect, useRef, useState } from "react";
import MainPresenter from "./MainPresenter";

const testInfo = [
  {
    attrTitle: "color",
    title: "CSS #1",
  },
  {
    attrTitle: "text",
    title: "CSS #2",
  },
  {
    attrTitle: "background",
    title: "CSS #3",
  },
  {
    attrTitle: "border",
    title: "CSS #4",
  },
  {
    attrTitle: "transition",
    title: "CSS #5",
  },
];

const MainContainer = () => {
  const [show, setShow] = useState(false);
  const textRef = useRef();

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
    <MainPresenter
      data={testInfo}
      show={show}
      setShow={setShow}
      textRef={textRef}
    />
  );
};

export default MainContainer;
