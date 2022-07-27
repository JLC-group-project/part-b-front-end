import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";

function AboutUs({ aboutPage }) {
  {
    /*ternary rendering if no about page data fetched will show loading gif image*/
  }
  return aboutPage ? (
    <div>
      {/*display the about us page image*/}
      <div className="flex justify-center ">
        <img
          src={aboutPage.image_url}
          alt="AboutUs_image"
          className="max-w-[1200px]"
        />
      </div>
      {/*display the about us page slogan title and body*/}
      <div className="flex-col pt-7">
        <h1 className="text-2xl md:text-4xl text-center">{aboutPage.title} </h1>
        <h4 className="text-l md:text-2xl text-center mt-4">
          {aboutPage.body}
        </h4>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default AboutUs;
