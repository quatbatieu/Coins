import React from "react";
import scss from "./style.module.scss";

const Menu2 = () => {
  return (
    <div className={scss.center}>
      <div className={scss.title}>
        <span>Need cryptocurrency? Buy using a card.</span>
        <ul>
          <li>
            <img src="./img/1.png" alt="" />
          </li>
          <li>
            <img src="./img/2.png" alt="" />
          </li>
          <li>
            <img src="./img/3.png" alt="" />
          </li>
          <li>
            <img src="./img/4.png" alt="" />
          </li>
          <li>
            <img src="./img/5.png" alt="" />
          </li>
        </ul>
        <button>Buy Cryptocurrency</button>
      </div>
    </div>
  );
};

export default Menu2;
