import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import {Features} from "../components/Features";
import Cta from "../components/cta";
import { aboutUs, dataFeatures } from "../components/data";
import Faq from "../components/faq";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import { Introduction } from "../components/introduction";

const Home = () => {
  return (
    <>
      <Head>
        <title>Repasse Consórcio</title>
        <meta
          name="description"
          content="Repasse Consórcio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Introduction />
      <Features imgPos="left" data={dataFeatures} id="funcionalidades"/>
      <Features data={aboutUs} id="sobre-nos" />
      <SectionTitle title="Dúvidas Frequentes" id="duvidas">
        A seguir, listamos algumas das perguntas mais frequentes que recebemos
        sobre o Repasse Consórcio. Se você tiver alguma dúvida que não foi
        respondida aqui, não hesite em entrar em contato conosco.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
