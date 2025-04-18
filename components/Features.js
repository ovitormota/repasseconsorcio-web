import Image from "next/image";
import React from "react";
import Container from "./container";

export const Features = (props) => {
  const { data } = props;
  return (
    <>
      <Container
        id={props.id}
        className="flex flex-wrap lg:my-15 mb-10 gap-10 lg:flex-nowrap"
      >
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 hidden lg:flex ${
            props.imgPos === "left" ? " order-0" : "order-1"
          }`}
        >
          <Image
            src={data.image}
            width={521}
            height={352}
            alt="Features"
            className="object-cover"
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "left" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Feature key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Feature>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-center w-full lg:w-1/2 lg:hidden`}
        >
          <Image
            src={data.image}
            width={521}
            height={352} // Altura ajustada para manter a proporção da imagem
            alt="Features"
            className="object-cover"
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>
      </Container>
    </>
  );
};

function Feature(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
