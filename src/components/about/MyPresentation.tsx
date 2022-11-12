import React, { useState } from "react";
import styled from "styled-components";
import { Reorder } from "framer-motion";
import { theme } from "../../theme/theme";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const MyPresentation = () => {
  const { ref, inView } = useInView();
  const { ref: refItems, inView: inViewItems } = useInView();
  const [items, setItems] = useState([
    "Motivé",
    "Autonome",
    "Esprit d'équipe",
    "Ambitieux",
    "Patient",
  ]);
  return (
    <MyPresentationStyled>
      <p ref={ref} className={`${inView ? "isVisible" : ""}`}>
        Développeur Front-end React sur Toulouse. J'ai découvert la programmation web pars
        curiosité, ça a été une révélation. Suite à cela j'ai entrepris une reconversion Pro. <br />{" "}
        <br /> J'ai voyagé aussi à la découverte du mobile avec Flutter. J’aime les nouvelles
        expériences et les challenges.
      </p>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        ref={refItems}
        className={`${inViewItems ? "isVisible" : "reaoder"}`}
      >
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <span className="spanItems">{item}</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </MyPresentationStyled>
  );
};

const MyPresentationStyled = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .isVisible {
    transition: 1s;
    opacity: 1;
    transform: scale(1);
  }

  p {
    max-width: 500px;
    color: ${theme.colors.gray};
    font-size: 18px;
    opacity: 0;
  }

  //anim atouts:
  .reaoder {
    transform: scale(0);
  }

  li {
    list-style: none;
  }
  .spanItems {
    height: 25px;
    width: 120px;
    margin: 10px 0 0 15px;
    padding: 3px 5px 3px 5px;
    cursor: grab;
    background-color: white;
    color: ${theme.colors.gray};
    border: 1px solid ${theme.colors.primaryColor};
    border-radius: 5px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;

    &:hover {
      background-color: ${theme.colors.primaryColor};
      color: white;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    p {
      max-width: 460px;
    }

    .spanItems {
      width: 110px;
      margin: 3px 55px 0 5px;
      padding: 2px;
    }
  }

  @media (max-width: 599px) {
    p {
      max-width: 330px;
      font-size: 15px;
    }
  }
`;

export default MyPresentation;
