import React from "react";
import scss from "./style.module.scss";
import data from "./data.json";

const Latest = () => {
  return (
    <div className={scss.center}>
      <div className={scss.title}>
        <div className={scss.bigwin}>
          <p>BIGGEST WINNERS TODAY</p>
        </div>
        <div className={scss.tablea}>
          <div className={scss.righta}>
            <table>
              <thead>
                <tr>
                  <th>GameIcon</th>
                  <th>GameName</th>
                  <th>PlayerName</th>
                  <th style={{padding:"0 0 15px 150px"}}>PlayValue</th>
                  <th>PlayWinAmount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value) => {
                  return (
                    <tr key={value.id}>
                      <td >
                        <img src={value.gameIcon} alt="" />
                      </td>
                      <td >{value.gameName}</td>
                      <td >{value.playerName}</td>
                      <td >{value.playValue}</td>
                      <td style={{color:"#43b309"}}>{value.playWinAmount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
