import React, { useCallback, useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import { useParams } from "react-router-dom";
import { attrApi } from "../../api";
const MainContainer = ({ textRef }) => {
  const [show, setShow] = useState(false);
  const [cursorValue, setCursorValue] = useState("click");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { attrId } = useParams();

  const getAttrName = useCallback(() => {
    setLoading(true);
    attrApi
      .getAttrName(attrId)
      .then((value) => {
        setData(value.data);
      })
      .catch(function (e) {
        console.log("error! ", e);
      })
      .finally(setLoading(false));
  }, [attrId]);

  useEffect(() => {
    getAttrName();
  }, [attrId, getAttrName]);

  return (
    <MainPresenter
      attrId={attrId}
      data={data}
      show={show}
      setShow={setShow}
      textRef={textRef}
      getAttrName={getAttrName}
      setCursorValue={setCursorValue}
      cursorValue={cursorValue}
      isLoading={isLoading}
    />
  );
};

export default MainContainer;
