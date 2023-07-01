import useTranslation from "next-translate/useTranslation";
import { Russo_One } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const russoOne = Russo_One({ subsets: ["cyrillic"], weight: "400" });
interface ModalFormCallProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalFormCall({
  isModalOpen,
  setIsModalOpen,
}: ModalFormCallProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mrgvnrld", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Ошибка при отправке данных формы");
      }
    } catch (error) {
      console.error("Ошибка при отправке данных формы", error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  interface FormData {
    name: string;
    phone: string;
    messages: string;
  }

  useEffect(() => {
    const body = document.querySelector("body");

    if (isModalOpen && body) {
      body.style.overflow = "hidden";
    } else if (!isModalOpen && body) {
      body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const { t, lang } = useTranslation("");

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">{t("home:name")}</label>
                  <input
                    maxLength={20}
                    {...register("name", { required: true })}
                    id="name"
                  />
                  {errors.name && <p></p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t("home:phone")}</label>
                  <input
                    maxLength={13}
                    {...register("phone", {
                      required: true,
                      pattern: /^\+375\d*$/,
                      validate: (value) => Number.isInteger(Number(value)),
                    })}
                    id="phone"
                    defaultValue="+375"
                    onKeyPress={(event) => {
                      if (!/\d/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                  {errors.phone && <p></p>}
                </div>

                <div className="form-group">
                  <label htmlFor="messages">{t("home:message")}</label>
                  <textarea
                    maxLength={300}
                    {...register("messages", {
                      required: true,
                    })}
                    id="messages"
                  />
                  {errors.phone && <p></p>}
                </div>

                <button
                  className={`${russoOne.className} modal__submit-button`}
                  type="submit"
                >
                  {t("home:submit")}
                </button>
              </form>
            ) : (
              <div>
                <p>{t("home:thanks")}</p>
                <p>{t("home:weWill")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
