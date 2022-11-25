import React from "react";
import { ContactCard } from "../";
import email from "../../assets/svg/email.svg";
import pointer from "../../assets/svg/pointer.svg";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import linkedin from "../../assets/svg/linkedin.svg";

const ContactList = () => {
  return (
    <section id="contact-list" className="xl:px-60 lg:px-40 sm:px-16 px-5 w-full">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-[45px] py-14">
          Our Contact <span className="text-accent text-7xl">.</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#03254c" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <div>
              <h1 className="font-semibold text-xl pb-3">Give us a call</h1>
              <div className="flex flex-row gap-10 text-dimBlue">
                <p>
                  +62 31 357 3036 (Hunting) <br /> +62 31 353 9972
                </p>
                <p>
                  +62 31 353 9973 <br /> +62 31 357 3037
                </p>
              </div>
            </div>
          </div>
          <ContactCard
            content={{
              img: email,
              title: "Send us an email",
              desc: "sales@landasindo.co.id",
            }}
          />
        </div>
        <div className="py-14">
          <ContactCard
            content={{
              img: pointer,
              title: "Come see us",
              desc: "Graha SISTRACO, 3rd floor Jl. Perak Barat No. 75 Surabaya 60177, Jawa Timur, Indonesia",
            }}
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="py-10">
        <h1 className="pb-10 font-semibold text-[45px]">
          Get to know us <span className="text-accent text-7xl">.</span>
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-5">
          <div className="p-5 w-full hover:bg-natural hover:shadow-md hover:-translate-y-2 hover:scale-110 duration-300 rounded-xl">
            <ContactCard
              content={{
                img: instagram,
                title: "instagram",
                desc: "@landasindo_official",
              }}
            />
          </div>
          <div className="p-5 w-full hover:bg-natural hover:shadow-md hover:-translate-y-2 hover:scale-110 duration-300 rounded-xl">
            <ContactCard
              content={{
                img: facebook,
                title: "facebook",
                desc: "PT Landasindo Sahu Baruna Jaya",
              }}
            />
          </div>
          <div className="p-5 w-full hover:bg-natural hover:shadow-md hover:-translate-y-2 hover:scale-110 duration-300 rounded-xl">
            <ContactCard
              content={{
                img: linkedin,
                title: "linkedin",
                desc: "PT Landasindo Sahu Baruna Jaya",
              }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="py-10 text-dimBlue">
        <p>If you’ve got questions, we would love to answer them. Or perhaps some suggestions on great flavor ideas? We would love to hear them!</p>
      </div>
    </section>
  );
};

export default ContactList;
