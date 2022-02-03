import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { learningApi } from "../../api";
import LecturePresenter from "./LecturePresenter";

const LectureContainer = ({ textRef }) => {
  const [cursorValue, setCursorValue] = useState("");
  const { attrId, pageNo } = useParams();
  const navigate = useNavigate();
  const [isChecked, setCheck] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(-1);
  const [data, setData] = useState({});

  useEffect(() => {
    if (isChecked) {
      setShowGuide(false);
    }
  }, [isChecked]);

  const handleOnClickHome = () => {
    navigate(`/${attrId}`);
  };

  const handleSetPage = (attrId, pageNo) => {
    if (pageNo === 0) {
      navigate(`/${attrId}/preview`);
      return;
    }
    setCheck(false);
    setShowGuide(true);
    learningApi
      .getLearningPageSettings(attrId, pageNo)
      .then((value) => {
        setData(value.data);
        setTotalPage(value.data.totalPage);
      })
      .catch(function (e) {
        console.log("error! ", e);
      })
      .finally(setLoading(false));
  };

  useEffect(() => {
    handleSetPage(attrId, pageNo);
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
      isLoading={isLoading}
      handleSetPage={handleSetPage}
      totalPage={totalPage}
      pageNo={pageNo}
    />
  );
};

export default LectureContainer;
