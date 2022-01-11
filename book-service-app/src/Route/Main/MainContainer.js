import React, { useEffect, useRef, useState } from "react";
import MainPresenter from "./MainPresenter";

const testInfo = [
  {
    chapterNum: 1,
    attrName: "color",
    styles: [
      "background-color : red",
      "background-color : green",
      "background-color : blue",
    ],
  },
  {
    chapterNum: 2,
    attrName: "text",
    styles: ["color : red", "color : green", "color : blue"],
  },
  {
    chapterNum: 3,
    attrName: "background",
    styles: ["color : red", "color : green", "color : blue"],
  },
  {
    chapterNum: 4,
    attrName: "border",
    styles: [
      "border-radius : 50%",
      "border : 2px solid green",
      "border : 3px dotted blue",
    ],
  },
  {
    chapterNum: 5,
    attrName: "transition",
    styles: ["color : red", "color : green", "color : blue"],
  },
];

const MainContainer = () => {
  const [show, setShow] = useState(false);
  const textRef = useRef();
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      textRef.current.style.position = "absolute";
      textRef.current.style.cursor = "default";
      textRef.current.style.left = e.clientX + "px";
      textRef.current.style.top = e.clientY + "px";
    });
  });
  return (
    <MainPresenter
      attrInfo={testInfo}
      show={show}
      setShow={setShow}
      textRef={textRef}
    />
  );
};

export default MainContainer;
