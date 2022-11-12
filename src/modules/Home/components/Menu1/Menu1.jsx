import React from "react";
import data from "./data.json";
import scss from "./style.module.scss";

const Menu = () => {
  return (
    <div className={scss.center}>
      <div className={scss.lobby}>
        <div className={scss.polite}>
          {data.map((value) => {
            return (
              <div key={value.id} className={scss.aio}>
                <button className={scss.button1}>
                  <div className={scss.inner}>
                    <div className={scss.box}>
                      <img src={value.tabItemIcon} alt="" />
                    </div>
                    <div className={scss.names}>{value.tabItemText}</div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
