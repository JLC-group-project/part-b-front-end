import React, { useEffect, useState } from "react";

function Home({ homePage }) {
  return (
    <div>
      <div>
        <img src={`${homePage.image_url}`} alt="Home_image" />
      </div>
      <div>
        <h1>{homePage.title} </h1>
        <h4>{homePage.body} </h4>
      </div>
    </div>
  );
}

export default Home;
