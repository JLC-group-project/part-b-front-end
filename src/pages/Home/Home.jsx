import React, { useEffect, useState } from "react";

function Home({ homePage }) {
  return (
    <div>
      <div className="flex justify-center ">
        <img
          src={`${homePage.image_url}`}
          alt="Home_image"
          className="w-full lg:w-[1600px]"
        />
      </div>
      <div>
        <div className="flex-col pt-7">
          <h1 className="text-2xl md:text-4xl text-center">
            {homePage.title}{" "}
          </h1>
          <h4 className="text-l md:text-2xl text-center mt-4">
            {homePage.body}{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
