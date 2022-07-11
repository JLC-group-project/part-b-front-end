import React from "react";

function Home({image, openingHours}) {
  return (
    <div>
      <ul>
        <li>
          <img src="https://picsum.photos/200/300" alt="home page image" />
        </li>
        <li> {openingHours} </li>
      </ul>
    </div>
  );
}

export default Home;
