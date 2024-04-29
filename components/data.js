import {
  CheckCircleIcon,
  CursorArrowRaysIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import aboutUsImg from "../public/img/about-us.png";
import featuresImg from "../public/img/features.png";

const dataFeatures = {
  title: "A escolha inteligente para investir e alcançar seus objetivos",
  desc: "Nós oferecemos uma maneira inovadora de simplificar a negociação de cotas de consórcio, tornando o processo eficiente e transparente para todos os envolvidos.",
  image: featuresImg,
  bullets: [
    {
      title: "Simplificação da Negociação",
      desc: "Oferecemos uma abordagem inovadora para simplificar a negociação de cotas de consórcio, garantindo eficiência e transparência em todas as etapas.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Transparência e Eficiência",
      desc: "Nosso compromisso com a transparência e eficiência redefine a experiência de transação de consórcio, proporcionando uma negociação segura e confiável.",
      icon: <LockClosedIcon />,
    },
    {
      title: "Facilidade e Conveniência",
      desc: "A plataforma Repasse Consórcio oferece facilidade e conveniência para todos os participantes, simplificando o processo de compra e venda de cotas de consórcio.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const aboutUs = {
  title: "Sobre Nós",
  desc: "O Repasse Consórcio é uma plataforma que nasceu com o propósito de simplificar e tornar mais acessível o processo de negociação de cotas de consórcio. Fundada por uma equipe apaixonada por tecnologia e finanças, nossa missão é proporcionar transparência, eficiência e segurança para todos os participantes do mercado de consórcios.",
  image: aboutUsImg,
  bullets: [],
};

export { aboutUs, dataFeatures };
