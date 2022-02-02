import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { learningApi } from "../../api";
import LecturePresenter from "./LecturePresenter";

const LectureContainer = ({ textRef }) => {
  const [cursorValue, setCursorValue] = useState("");
  const { attrId } = useParams();
  const navigate = useNavigate();
  const [isChecked, setCheck] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const handleOnClickHome = () => {
    navigate(`/${attrId}`);
  };

  useEffect(() => {
    learningApi
      .getLearningPageSettings(attrId, 1)
      .then((value) => {
        setData(value.data);
      })
      .catch(function (e) {
        console.log("error! ", e);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <LecturePresenter
      attrId={attrId}
      textRef={textRef}
      cursorValue={cursorValue}
      setCursorValue={setCursorValue}
      handleOnClickHome={handleOnClickHome}
      setCheck={setCheck}
      isChecked={isChecked}
      setShowGuide={setShowGuide}
      showGuide={showGuide}
      navigate={navigate}
      data={data}
    />
  );
};

export default LectureContainer;
