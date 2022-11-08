import cryptoImg from "../assets/images/crypto.png";
import immoImg from "../assets/images/immo.png";
import portfolioImg from "../assets/images/portfolio.png";
import christmasImg from "../assets/images/christmas.png";
import infosImg from "../assets/images/infos.png";

export interface ProjectsProps {
  id: number;
  name: string;
  description: string;
  url: string;
  img: string;
}

export const projects = [
  {
    id: 1,
    name: "CryptoFinance",
    description:
      "Web app sur les cryptomonnaies, suivie du cours du bitcoin et des altcoins. Réalisé avec React js => chart js, axios (API), context, react router, styled-components, responsive.",
    url: "https://cryptos-tailwind-tsx.vercel.app/",
    img: cryptoImg,
  },
  {
    id: 2,
    name: "Immobillier 3D",
    description:
      "Web app sur les cryptomonnaies, suivie du cours du bitcoin et des altcoins. Réalisé avec React js => chart js, axios (API), context, react router, styled-components, responsive.",
    url: "https://immobilier-react-devndy.vercel.app/",
    img: immoImg,
  },
  {
    id: 3,
    name: "Merry Christmas ",
    description:
      "Web app sur les cryptomonnaies, suivie du cours du bitcoin et des altcoins. Réalisé avec React js => chart js, axios (API), context, react router, styled-components, responsive.",
    url: "https://portfolio-ndy-devndy.vercel.app/",
    img: christmasImg,
  },
  {
    id: 4,
    name: "Porfolio Gen.1 ",
    description:
      "Web app sur les cryptomonnaies, suivie du cours du bitcoin et des altcoins. Réalisé avec React js => chart js, axios (API), context, react router, styled-components, responsive.",
    url: "https://portfolio-ndy-devndy.vercel.app/",
    img: portfolioImg,
  },
  {
    id: 5,
    name: "Infos API ",
    description:
      "Web app sur les cryptomonnaies, suivie du cours du bitcoin et des altcoins. Réalisé avec React js => chart js, axios (API), context, react router, styled-components, responsive.",
    url: "https://portfolio-ndy-devndy.vercel.app/",
    img: infosImg,
  },
];
