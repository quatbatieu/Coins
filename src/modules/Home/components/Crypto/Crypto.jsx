import React from 'react'
import scss from "./style.module.scss";

const Crypto = () => {
  return (
    <div className={scss.features}>
      <div className={scss.swiper}>
        <div className={scss.inner}>
          <button className={scss.buttona}><span>Free Crypto Wheel</span></button>
          <button className={scss.buttonb}><span>Cashback up to 15%</span></button>
          <button className={scss.buttonb}><span>Rakeback</span></button>
        </div>
        <div className={scss.inner}>
          <button className={scss.buttona}><span>Vip Club </span></button>
          <button className={scss.buttonb}><span>Free Boxes</span></button>
          <button className={scss.buttonb}><span>Promocodes </span></button>
        </div>
      </div>
    </div>
  )
}

export default Crypto