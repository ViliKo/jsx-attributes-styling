import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>
        <img src={img} alt="home" />
        <img src={img} alt="home" />
        <img src={img} alt="home" />
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
