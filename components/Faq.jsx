"use client";
import style from "./Faq.module.css";
import { useState } from "react";

import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const faqs = [
  {
    question: "Comment fonctionne la vente sur videGarage ?",
    answer:
      "Vous publiez vos articles, les clients intéressés vous contactent et vous organisez la remise.",
  },
  {
    question: "Est-ce que la création d’un compte est gratuite ?",
    answer:
      "Oui, la création de compte sur videGarage est totalement gratuite.",
  },
  {
    question: "Puis-je modifier une annonce après publication ?",
    answer:
      "Oui, vous pouvez éditer vos annonces depuis votre tableau de bord.",
  },
  {
    question: "Combien de temps une annonce reste en ligne ?",
    answer: "Une annonce reste en ligne 30 jours, renouvelable gratuitement.",
  },
  {
    question: "Puis-je supprimer mon compte à tout moment ?",
    answer:
      "Oui, vous pouvez supprimer votre compte à tout moment via les paramètres.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className={style.faqContainer}>
        <h1 className={style.title}>Foire aux questions (FAQ)</h1>
        <ul className={style.faqList}>
          {faqs.map((item, index) => (
            <li
              key={index}
              className={`${style.faqItem} ${
                activeIndex === index ? style.dBlock : ""
              }`}
            >
              <div className={style.question}>
                <button onClick={() => toggleAnswer(index)}>
                  {item.question}
                  {activeIndex !== index ? <GoChevronDown /> : <GoChevronUp />}
                </button>
              </div>
              {activeIndex === index && (
                <p className={style.answer}>{item.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
