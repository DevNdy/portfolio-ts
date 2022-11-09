import React, { useState } from "react";
import styled from "styled-components";
import { Reorder } from "framer-motion";
import { theme } from "../../theme/theme";

const MyPresentation = () => {
  const [items, setItems] = useState([
    "Motivé",
    "Autonome",
    "Esprit d'équipe",
    "Ambitieux",
    "Patient",
  ]);
  return (
    <MyPresentationStyled>
      <p>
        Développeur Front-end React sur Toulouse. J'ai découvert la programmation web pars
        curiosité, ça a été une révélation. Suite à cela j'ai entrepris une reconversion Pro. <br />{" "}
        <br /> J'ai voyagé aussi à la découverte du mobile avec Flutter. J’aime les nouvelles
        expériences et les challenges.
      </p>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
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

  p {
    max-width: 500px;
    color: ${theme.colors.gray};
    font-size: 18px;
  }

  //anim atouts:
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
`;

export default MyPresentation;
