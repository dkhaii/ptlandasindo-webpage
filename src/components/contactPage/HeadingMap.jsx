import React from "react";

const HeadingMap = () => {
  return (
    <section id="heading-map" className=" w-full pt-28">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pt landasindo&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://formatjson.org/">format json</a>
        </div>
      </div>
    </section>
  );
};

export default HeadingMap;
