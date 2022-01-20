import React, { useState } from "react";
import MainPresenter from "./MainPresenter";
import { useParams } from "react-router-dom";
const MainContainer = ({ textRef }) => {
  const [show, setShow] = useState(false);
  const [cursorValue, setCursorValue] = useState("click");
  const [data, setData] = useState({
    attrTitle: "color",
    title: "CSS #1",
    prevAttr: "transition",
    nextAttr: "text",
  });

  const { attrId } = useParams();

  // api 호출 및 데이터 변경
  const getAttrSettings = () => {
    setData({
      attrTitle: "text",
      title: "CSS #2",
      prevAttr: "color",
      nextAttr: "background",
    });
  };

  return (
    <MainPresenter
      attrId={attrId}
      data={data}
      show={show}
      setShow={setShow}
      textRef={textRef}
      getAttrSettings={getAttrSettings}
      setCursorValue={setCursorValue}
      cursorValue={cursorValue}
    />
  );
};

export default MainContainer;
