import React from "react";
import Carousel from "../../Components/Carousel";
import Menu from "../../Components/Menu";

const MainPresenter = ({ attrInfo, show, setShow }) =>
  show ? (
    <Menu setShow={setShow} />
  ) : (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>menu</button>
    </div>
  );

export default MainPresenter;
