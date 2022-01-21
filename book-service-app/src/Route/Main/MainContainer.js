import React, { useEffect, useState } from "react";
import MainPresenter from "./MainPresenter";
import { useParams } from "react-router-dom";
import { attrApi } from "../../api";
const MainContainer = ({ textRef }) => {
  const [show, setShow] = useState(false);
  const [cursorValue, setCursorValue] = useState("click");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { attrId } = useParams();

  useEffect(() => {
    getAttrName();
  }, []);

  useEffect(() => {
    getAttrName();
  }, [attrId]);

  // api 호출 및 데이터 변경
  const getAttrName = () => {
    attrApi
      .getAttrName(attrId)
      .then((value) => {
        setData(value.data);
      })
      .catch(function (e) {
        console.log("error! ", e);
      })
      .finally(setLoading(false));
  };

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
    />
  );
};

export default MainContainer;
