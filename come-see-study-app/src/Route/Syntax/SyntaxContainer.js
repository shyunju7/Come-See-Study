import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SyntaxPresenter from "./SyntaxPresenter";
const SyntaxContainer = ({ textRef }) => {
  const { attrId } = useParams();
  const [cursorValue, setCursorValue] = useState("");
  const navigate = useNavigate();
  const [popupCookie, setPopupCookie] = useState(false);

  const handleLocateLearningPage = () => {
    navigate(`/${attrId}/learning/1`);

    if (popupCookie) {
      const today = new Date();
      console.log(today.getDate() + 1);
      window.localStorage.setItem("expires", today.getDate() + 1);
    }
  };

  return (
    <SyntaxPresenter
      textRef={textRef}
      cursorValue={cursorValue}
      setCursorValue={setCursorValue}
      attrId={attrId}
      handleLocateLearningPage={handleLocateLearningPage}
      popupCookie={popupCookie}
      setPopupCookie={setPopupCookie}
    />
  );
};

export default SyntaxContainer;
