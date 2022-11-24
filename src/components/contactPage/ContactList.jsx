import React from "react";

const ContactList = () => {
  return (
    <section id="contact-list" className="xl:px-80 md:px-40 px-16 w-full">
      <div className="w-full">
        <h1 className="font-semibold text-[45px] py-14">
          Our Contact <span className="text-accent text-7xl">.</span>
        </h1>
        <div className="flex gap-20">
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
          <div className="flex items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#03254c" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <div>
              <h1 className="font-semibold text-xl pb-3">Send us an email</h1>
              <p className="text-dimBlue">sales@landasindo.co.id </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 py-14">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#03254c" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <div>
            <h1 className="font-semibold text-xl pb-3">Come see us</h1>
            <p className="text-dimBlue">Graha SISTRACO, 3rd floor Jl. Perak Barat No. 75 Surabaya 60177, Jawa Timur, Indonesia </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="py-10 text-dimBlue">
          <p>If you’ve got questions, we would love to answer them. Or perhaps some suggestions on great flavor ideas? We would love to hear them!</p>
        </div>
      </div>
    </section>
  );
};

export default ContactList;
