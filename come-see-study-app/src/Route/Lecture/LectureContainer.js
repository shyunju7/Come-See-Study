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
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(-1);
  const [data, setData] = useState({});
  const handleOnClickHome = () => {
    navigate(`/${attrId}`);
    setPageNo(1);
  };

  const handleSetPage = (attrId, pageNo) => {
    learningApi
      .getLearningPageSettings(attrId, pageNo)
      .then((value) => {
        setData(value.data);
        setTotalPage(value.data.totalPage);
      })
      .catch(function (e) {
        console.log("error! ", e);
      })
      .finally(
        setLoading(false),
        setPageNo((prev) => prev + 1)
      );
  };

  useEffect(() => {
    handleSetPage(attrId, 1);
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
      handleSetPage={handleSetPage}
      pageNo={pageNo}
      totalPage={totalPage}
      setPageNo={setPageNo}
    />
  );
};

export default LectureContainer;
