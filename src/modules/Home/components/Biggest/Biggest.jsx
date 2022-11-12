import React from "react";
import scss from "./style.module.scss";
import data from "./data.json";

const Biggest = () => {
  return (
    <div className={scss.center}>
      <div className={scss.title}>
        <div className={scss.bigwin}>
          <p>BIGGEST WINNERS TODAY</p>
        </div>
        <div className={scss.tablea}>
          <div className={scss.lefta}>
            <div className={scss.info}>
              <div className={scss.tit}>WON ALL</div>
              <button>Play now</button>
            </div>
            <div className={scss.ito}>
              <img
                src="https://coins.game/assets/image/biggest.png?x=xsd"
                alt=""
              />
            </div>
          </div>
          <div className={scss.righta}>
            <table>
              <thead></thead>
              <tbody>
                {data.map(value =>{
                  return (
                    <tr key={value.id}>
                      <td className={scss.td1}>
                        <img src={value.playUnit} alt="" />
                      </td>
                      <td className={scss.td2}>
                        <img src={value.playerAvatarUrl} alt="" />
                      </td>
                      <td className={scss.td3}>{value.playerName}</td>
                      <td className={scss.td4}>{value.playerRank}</td>
                      <td className={scss.td5}>{value.playAmount}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biggest;
