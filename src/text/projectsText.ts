import cryptoImg from "../assets/images/crypto.png";
import immoImg from "../assets/images/immo.png";
import portfolioImg from "../assets/images/portfolio.png";
import moodImg from "../assets/images/mood.png";
import eatImg from "../assets/images/eat.png";
import fastFood from "../assets/images/fast-food.png";

export interface ProjectsProps {
  id: number;
  name: string;
  description: string;
  url: string;
  img: string;
  responsive: boolean;
}

export const projects = [
  {
    id: 1,
    name: "Mood",
    description:
      "Enregistrez chaque jour votre humeur, suivez son évolution. Réalisé avec React, Typescript et firebase. ",
    url: "https://mood-devndy.vercel.app/",
    img: moodImg,
    responsive: true,
  },
  {
    id: 2,
    name: "Fast-Food",
    description:
      'Commander, gerer avec un mode admin les articles (ajouter ou editer). Réalisé pour écran 13" min.',
    url: "https://fast-food-lake.vercel.app/",
    img: fastFood,
    responsive: false,
  },
  {
    id: 3,
    name: "What to eat?",
    description:
      "Vous ne savez pas quoi manger? Peut être que cette application web vous donnera de l'inspiration...",
    url: "https://what-to-eat-devndy.vercel.app/",
    img: eatImg,
    responsive: true,
  },
  {
    id: 4,
    name: "CryptoFinance",
    description:
      "Web app sur les cryptomonnaies, suivie du cours du bitcoin et des altcoins. Réalisé avec React js => chart js, axios (API), context, react-router v6, tailwind.",
    url: "https://cryptos-tailwind-tsx-devndy.vercel.app/",
    img: cryptoImg,
    responsive: false,
  },
  {
    id: 5,
    name: "Immobillier 3D",
    description:
      "Web app avec l'utilisation de Spline. Réalisé avec React js, typescript, styled-components.",
    url: "https://immobilier-react-devndy.vercel.app/",
    img: immoImg,
    responsive: true,
  },
];
