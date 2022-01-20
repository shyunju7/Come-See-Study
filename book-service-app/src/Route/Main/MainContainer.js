import React, { useEffect, useRef, useState } from "react";
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
  const [show, setShow] = useState(false);
  const textRef = useRef();
  const [data, setData] = useState({
    attrTitle: "color",
    title: "CSS #1",
    prevAttr: "transition",
    nextAttr: "text",
  });
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

  // api 호출 및 데이터 변경
  const getAttrSettings = () => {
    setData({
      attrTitle: "text",
      title: "CSS #2",
      prevAttr: "color",
      nextAttr: "background",
    });
    console.log("setting!!!");
  };

  return (
    <MainPresenter
      data={data}
      show={show}
      setShow={setShow}
      textRef={textRef}
      getAttrSettings={getAttrSettings}
    />
  );
};

export default MainContainer;
