import React from "react";
import scss from "./style.module.scss";

const Mobie = () => {
  return (
    <div className={scss.hio}>
      <div className={scss.center}>
        <div className={scss.menu}>
          <img
            src="https://coins.game/assets/image/iconsMenu/Hamburger.svg"
            alt=""
          />
          <p>MENU</p>
        </div>
        <div className={scss.menu}>
          <img
            src="https://coins.game/assets/image/iconsMenu/Casino.svg"
            alt=""
          />
          <p>GAMING</p>
        </div>
        <div className={scss.menu}>
          <img
            src="https://coins.game/assets/image/iconsMenu/Casino.svg"
            alt=""
          />
          <p>SPORT</p>
        </div>
        <div className={scss.menu}>
          <img
            src="https://coins.game/assets/image/iconsMenu/Casino.svg"
            alt=""
          />
          <p>CHAT</p>
        </div>
        <div className={scss.menu}>
          <img
            src="https://coins.game/assets/image/iconsMenu/Bonuses.svg"
            alt=""
          />
          <p>BONUSES</p>
        </div>
      </div>
    </div>
  );
};

export default Mobie;
