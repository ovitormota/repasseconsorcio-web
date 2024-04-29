import { Disclosure, Transition } from "@headlessui/react";
import { ChatBubbleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const PopupWidget = () => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data, e) => {
    const { name, email, message } = data;
    const url = `https://api.whatsapp.com/send?phone=48992116204&text=Nome:%20${name}%0AMensagem:%20${message}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease">
              <span className="sr-only">Abrir widget de contato</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                <ChatBubbleLeftIcon className="w-6 h-6 text-white" />
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </Transition>
            </Disclosure.Button>
            <Transition
              className="fixed z-50 bottom-20 right-5 w-80"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
            >
              <Disclosure.Panel className="overflow-hidden border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md ">
                <div className="flex flex-col items-center justify-center h-24 bg-indigo-600">
                  <h3 className="text-lg text-white">Como podemos ajudar?</h3>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="mb-4">
                      <label
                        htmlFor="full_name"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        placeholder="Digite seu nome completo"
                        {...register("name", {
                          required: "Nome completo é obrigatório",
                          maxLength: 80,
                        })}
                        className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                          errors.name
                            ? "border-red-600 focus:border-red-600 ring-red-100"
                            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                        }`}
                      />
                      {errors.name && (
                        <div className="mt-1 text-sm text-red-400 invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        Sua Mensagem
                      </label>

                      <textarea
                        rows="4"
                        id="message"
                        {...register("message", {
                          required: "Digite sua Mensagem",
                        })}
                        placeholder="Digite sua Mensagem"
                        className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring   ${
                          errors.message
                            ? "border-red-600 focus:border-red-600 ring-red-100"
                            : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                        }`}
                        required
                      ></textarea>
                      {errors.message && (
                        <div className="mt-1 text-sm text-red-400 invalid-feedback">
                          {errors.message.message}
                        </div>
                      )}
                    </div>
                    <div className="mb-3">
                      <button
                        type="submit"
                        className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                      >
                        Enviar Mensagem
                      </button>
                    </div>
                  </form>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PopupWidget;
