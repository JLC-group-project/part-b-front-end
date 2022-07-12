import React from "react";

function Home({openingHours}) {
  return (
    <div className="flex font-sans">
      <ul>
        <li>
          <img src="https://picsum.photos/200/300" alt="home page image" />
        </li>
        <li> Opening hours: {openingHours} </li>
      </ul>
    </div>
  );
}

export default Home;
