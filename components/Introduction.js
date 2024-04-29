import Image from "next/image";
import introductionImg from "../public/img/introduction.png";
import Container from "./container";

export const Introduction = () => {
  return (
    <>
      <Container id="produto" className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 lg:mr-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Negocie cotas de consórcio com facilidade e segurança
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              No Repasse Consórcio, simplificamos sua experiência de negociação
              através de leilões online, assegurando transparência e eficiência
              tanto para vendedores quanto para compradores.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={introductionImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
