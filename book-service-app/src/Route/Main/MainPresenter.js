import React from "react";
import SlideItem from "../../Components/SlideItem";
import MainSlider from "../../Components/MainSlider";
import Menu from "../../Components/Menu";
import * as S from "../Main/style";
import MenuIcon from "../../assets/menu-icon.png";

const MainPresenter = ({ data, show, setShow, textRef }) =>
  show ? (
    <Menu setShow={setShow} />
  ) : (
    <S.Container>
      <S.Menu onClick={() => setShow((prev) => !prev)}>
        <img src={MenuIcon} alt="menu" width="38px" />
      </S.Menu>
      <S.CursorDescription ref={textRef} id="custom-cursor" />
      {data.length > 0 && data && (
        <MainSlider>
          {data.map((item) => (
            <SlideItem
              attrTitle={item.attrTitle}
              title={item.title}
              key={item.attrTitle}
            />
          ))}
        </MainSlider>
      )}
    </S.Container>
  );

export default MainPresenter;
