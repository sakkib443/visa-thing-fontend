/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Faq = ({ country, faqs }) => {
  return (
    <div className="mt-10">
      <div className="bg-slate-300 ">
        <h1 className="text-3xl p-2 font-bold text-gray-800 mb-6">FAQ's</h1>
      </div>
      <div className="join join-vertical w-full mt-8">
        {faqs?.map((faq, index) => (
          <div
            key={faq.id}
            className="collapse collapse-arrow join-item border-base-300 border"
          >
            <input
              type="radio"
              name="my-accordion-4"
              id={`faq-${faq.id}`}
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-medium">
              {faq?.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
