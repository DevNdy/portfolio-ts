import React, { useState } from "react";
import styled from "styled-components";
import { Reorder } from "framer-motion";
import { theme } from "../../theme/theme";
import { useInView } from "react-intersection-observer";

const MyPresentation = () => {
  const { ref, inView } = useInView();
  const { ref: refItems, inView: inViewItems } = useInView();
  const [items, setItems] = useState([
    "Motivé",
    "Passionné",
    "Autonome",
    "Autodidacte",
    "Persévérant",
    "Clean Code",
  ]);
  return (
    <MyPresentationStyled>
      <p ref={ref} className={`${inView ? "isVisible" : ""}`}>
        En tant que développeur front-end react, je suis responsable de la création de l'interface
        utilisateur d'une application ou d'un site web. <br /> <br /> J'utilise principalement le
        framework react et les technologies web courantes telles que HTML, CSS et JavaScript pour
        construire des interfaces utilisateur attrayantes et fonctionnelles. Je suis également
        responsable de son maintien en veillant à ce qu'elle soit compatible avec différents
        navigateurs et appareils. <br /> <br /> Passionné et motivé, je suis constamment à la
        recherche de nouvelles façons de créer des applications web de qualité supérieure.
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
      font-size: 12px;
    }
  }

  @media (max-width: 599px) {
    p {
      max-width: 330px;
      font-size: 15px;
    }

    .spanItems {
      width: 140px;
    }
  }
`;

export default MyPresentation;
