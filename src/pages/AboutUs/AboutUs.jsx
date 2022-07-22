import React, { useState, useEffect } from "react";

function AboutUs({ aboutPage }) {
  return (
    <div>
      <div className="flex justify-center ">
        <img
          src={aboutPage.image_url}
          alt="AboutUs_image"
          className="w-full lg:w-[1600px]"
        />
      </div>
      <div className="flex-col pt-7">
        <h1 className="text-4xl text-center">{aboutPage.title} </h1>
        <h4 className="text-xl text-center mt-4">{aboutPage.body} </h4>
      </div>
    </div>
  );
}

export default AboutUs;
