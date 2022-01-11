import React, { useState } from "react";
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
  return <MainPresenter attrInfo={testInfo} show={show} setShow={setShow} />;
};

export default MainContainer;
