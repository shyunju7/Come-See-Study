import react, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as Reservation } from "../assets/round-shadow.svg";

const MySVG = styled(Reservation)`
  margin: 240px;
`;

const MainImage = () => {
  const left = document.querySelectorAll(".left");

  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      //x 40 y36-40

      const x =
        (e.clientX * 100) / window.innerWidth < 18 &&
        (e.clientX * 100) / window.innerWidth > 60
          ? 20
          : (e.clientX * 100) / window.innerWidth;

      const y =
        (e.clientY * 100) / window.innerHeight <= 36
          ? 36
          : (e.clientY * 100) / window.innerHeight;

      left.forEach((eye) => {
        eye.setAttribute("cx", x + "%");
        eye.setAttribute("cy", y + "%");
      });
    });
  }, []);

  return <MySVG />;
};

export default MainImage;
