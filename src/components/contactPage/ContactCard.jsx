import React from "react";

const ContactCard = ({ content }) => {
  return (
    <div className="flex items-center gap-5">
      <img src={content.img} alt="icon-svg" />
      <div>
        <h1 className="font-semibold text-xl pb-3">{content.title}</h1>
        <p className="text-dimBlue">{content.desc}</p>
      </div>
    </div>
  );
};

export default ContactCard;
