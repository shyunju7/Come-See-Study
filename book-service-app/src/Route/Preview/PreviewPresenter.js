import React from "react";
import ColorPreview from "../../Components/ColorPreview";
import TextPreview from "../../Components/TextPreview";
import * as S from "./style";
import PrevIcon from "../../assets/prev-icon.png";
import NextIcon from "../../assets/next-icon.png";

const pagePreview = {
  color: <ColorPreview />,
  text: <TextPreview />,
};

const PreviewPresenter = ({ attrId }) => (
  <div>
    {pagePreview[attrId]}
    <S.PrevButton to={`/${attrId}`}>
      <img src={PrevIcon} alt="Prev" width="32px" />
    </S.PrevButton>
    <S.NextButton to={`/${attrId}/lecture/1`}>
      <img src={NextIcon} alt="Next" width="32px" />
    </S.NextButton>
  </div>
);

export default PreviewPresenter;
