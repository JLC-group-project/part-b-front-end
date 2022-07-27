import React from "react";
import Loading from "../../components/Loading";

function Home({ homePage }) {
  {
    /*trinary rendering if not home page fetched will show loading*/
  }
  return homePage ? (
    <div>
      {/*display the home page image*/}
      <div className="flex justify-center ">
        <img
          src={`${homePage.image_url}`}
          alt="Home_image"
          className="max-w-[650px]"
        />
      </div>
      {/*display the home page slogan title and body*/}
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
  ) : (
    <Loading />
  );
}

export default Home;
