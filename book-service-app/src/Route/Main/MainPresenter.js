import React from "react";
import Carousel from "../../Components/Carousel";
import Menu from "../../Components/Menu";

const MainPresenter = ({ attrInfo, show, setShow, textRef }) =>
  show ? (
    <Menu setShow={setShow} />
  ) : (
    <div>
      <p ref={textRef}>click</p>
      <button onClick={() => setShow((prev) => !prev)}>menu</button>
    </div>
  );

export default MainPresenter;
