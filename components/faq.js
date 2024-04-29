import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import Container from "./container";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Como posso começar a usar o Repasse Consórcio?",
    answer:
      "Para começar a usar o Repasse Consórcio, basta acessar nosso site e explorar as opções disponíveis para compra e venda de cotas de consórcio. No entanto, para dar lances em leilões ou cadastrar suas próprias cotas, será necessário criar uma conta.",
  },

  {
    question: "Quais tipos de consórcios posso negociar na plataforma?",
    answer:
      "Na plataforma Repasse Consórcio, você pode negociar uma variedade de tipos de consórcios, incluindo automóveis, imóveis, entre outros.",
  },
  {
    question: "Qual é a política de segurança do Repasse Consórcio?",
    answer:
      "O Repasse Consórcio leva a segurança dos seus usuários muito a sério. Utilizamos tecnologias avançadas de criptografia para proteger as informações dos usuários.",
  },
  {
    question: "Existe algum custo para usar o Repasse Consórcio?",
    answer:
      "Não há custo fixo para usar o Repasse Consórcio. Você pode cadastrar quantas cotas desejar e dar quantos lances quiser sem nenhum custo adicional. Apenas uma pequena taxa será aplicada sobre o lance vencedor do leilão, a qual será descontada automaticamente do valor final do lance, caso a negociação seja finalizada com sucesso entre ambas as partes.",
  },
];

export default Faq;
