import React from 'react'
import scss from "./style.module.scss";

const Menu3 = () => {
  return (
    <div className={scss.center}>
      <div className={scss.topb}>
        <p>GAME PROVIDERS</p>
      </div>
      <div className={scss.botb}>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/AmaticDirect.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/PlaysonDirect.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/PGSoft.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/Yggdrasil.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/Spinomenal.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/PragmaticPlay.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/PariPlay.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/Platipus.png" alt="" />
        </div>
        <div className={scss.oid}>
          <img src="https://coins.game/assets/image/prov/MascotGaming.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Menu3