import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import ThemeChanger from "./ThemeChanger";
import Link from "next/link";
import { scrollToTarget } from "./ScrollToTarget";

const Navbar = () => {
  const navigation = [
    { label: "Produto", href: "/#produto" },
    { label: "Detalhes", href: "/#funcionalidades" },
    { label: "Sobre", href: "/#sobre-nos" },
    { label: "Dúvidas", href: "/#duvidas" },
  ];

  return (
    <div className="w-full mb-20 lg:mb-32">
      <nav className="fixed top-0 z-50 w-full bg-white dark:bg-trueGray-900">
        <div className="container relative flex flex-col lg:flex-row items-center justify-between p-8 mx-auto lg:justify-between">
          <div className="absolute lg:relative left-7 lg:left-0 flex items-center space-x-4 text-lg font-medium text-indigo-500 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Image
                src="/img/logo.png"
                alt="RC"
                width="32"
                height="32"
                className="w-8"
              />
              <span>Repasse Consórcio</span>
            </div>
            <ThemeChanger />
          </div>

          <div className="hidden lg:flex lg:items-center">
            <ul className="flex items-center justify-center list-none">
              {navigation.map((item, index) => (
                <li className="mr-6 nav__item" key={index}>
                  <button
                    onClick={() => scrollToTarget(item.href)}
                    className="inline-block px-2 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <Link
              href="https://app.repasseconsorcio.com.br"
              target="_blank"
              rel="noopener"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Acessar
            </Link>
          </div>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="lg:hidden px-2 py-1 ml-auto text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="lg:hidden flex flex-wrap w-full my-5">
                  <>
                    {navigation.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToTarget(item.href)}
                        className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.label}
                      </button>
                    ))}
                    <Link
                      href="https://app.repasseconsorcio.com.br"
                      target="_blank"
                      rel="noopener"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Acessar
                    </Link>
                  </>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
