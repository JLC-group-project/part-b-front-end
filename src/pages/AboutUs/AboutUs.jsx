import React, { useState, useEffect } from "react";

function AboutUs({ aboutPage }) {
  return (
    <div>
      <div>
        <img src={aboutPage.image_url} alt="AboutUs_image" />
      </div>
      <div>
        <h1>{aboutPage.title} </h1>
        <h4>{aboutPage.body} </h4>
      </div>
    </div>
  );
}

export default AboutUs;
