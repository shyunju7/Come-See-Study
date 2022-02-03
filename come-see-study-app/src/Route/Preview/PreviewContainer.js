import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PreviewPresenter from "./PreviewPresenter";

const PreviewContainer = ({ textRef }) => {
  const { attrId } = useParams();
  const [cursorValue, setCursorValue] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    if (window.localStorage.getItem(attrId) == null) {
      window.localStorage.setItem(attrId, 3);
    }
  }, []);

  return (
    <PreviewPresenter
      attrId={attrId}
      textRef={textRef}
      setCursorValue={setCursorValue}
      cursorValue={cursorValue}
      isLoading={isLoading}
    />
  );
};

export default PreviewContainer;
