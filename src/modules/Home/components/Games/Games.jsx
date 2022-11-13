import React from "react";
import scss from "./style.module.scss";
import data from "./data.json";

const Games = () => {
  return (
    <div className={scss.center}>
      <div className={scss.lab}>
        <div className={scss.alt}>
          original
          <b>Games</b>
        </div>
      </div>
      <div className={scss.slider}>
        <div className={scss.imgs}>
          {data.map((value) => {
            return (
              <div key={value.key} className={scss.ito}>
                <img src={value.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Games;
