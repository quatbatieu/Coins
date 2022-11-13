import React from "react";
import scss from "./style.module.scss";
import {
  PauseOutlined,
  SearchOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./style.css";

const Header = () => {
  const [gam, setgam] = useState(true);
  const opena = () => {
    document.getElementById("open1").style.display = "block";
  };
  const closea = () => {
    document.getElementById("open1").style.display = "none";
  };

  return (
    <div className={scss.title}>
      <input type="checkbox" id="check" />
      <div className={scss.header}>
        <div className={scss.container}>
          <div className={scss.logo}>
            <a href="">
              <img src="./assets/images/js.png" alt="" />
            </a>
          </div>
          <button className={scss.icona}>
            <label for="check">
              <PauseOutlined />
            </label>
          </button>
          <div className={scss.navbar}>
            <div className={scss.left}>
              <button className={scss.togglea}>
                {gam ? (
                  <div className={scss.gaming}>
                    <a i>Gaming</a>
                    <div
                      style={{ backgroundColor: "#2283f6" }}
                      className={scss.animation}
                    ></div>
                    <div className={scss.start}></div>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setgam(!gam);
                    }}
                    className={scss.gaming}
                  >
                    <a>Gaming</a>
                    <div className={scss.animation}></div>
                  </div>
                )}
                {gam ? (
                  <div
                    onClick={() => {
                      setgam(!gam);
                    }}
                    className={scss.gaming}
                  >
                    <a>Sport</a>
                    <div className={scss.animation}></div>
                    <div className={scss.start}></div>
                  </div>
                ) : (
                  <div className={scss.gaming}>
                    <a>Sport</a>
                    <div
                      style={{ backgroundColor: "#2283f6" }}
                      className={scss.animation}
                    ></div>
                  </div>
                )}
              </button>
              <div className={scss.sreach}>
                <div className={scss.inputa}>
                  <span className={scss.iconb}>
                    <SearchOutlined />
                  </span>
                  <input
                    type="text"
                    placeholder="Game name | Provider | Category Tag"
                  />
                </div>
              </div>
            </div>
            <div className={scss.right}>
              <div className={scss.user}>
                <button className={scss.buttona}> Log in </button>
                <button className={scss.buttonb}> Registration </button>
              </div>
            </div>
            <button className={scss.chat}>
              <MessageOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className={scss.chats} id="open1">
        <div className={scss.topa} onClick={() => closea()}>
          <div className={scss.vdv}>
            <a href="#" className={scss.a1}>
              <span>Cuộc hội thoại</span>
            </a>
            <a href="#" className={scss.a2}>
              <span>Trung tâm trợ giúp</span>
            </a>
          </div>
          <div className={scss.m351}>
            <span className={scss.hfo}>
              <span className={scss.h8u}>
                <span className={scss.yqf}>
                  <img src="./assets/images/a1.png" alt="" />
                </span>
                <span className={scss.yqf}>
                  <img src="./assets/images/a2.png" alt="" />
                </span>
                <span className={scss.yqf}>
                  <img src="./assets/images/a3.png" alt="" />
                </span>
                <span className={scss.yqf}>
                  <img src="./assets/images/a4.png" alt="" />
                </span>
              </span>
            </span>
            <span className={scss.gxox}>Chúng tôi đã sẵn sàng hỗ trợ bạn!</span>
          </div>
        </div>
        <div className={scss.bota}>
          <div className={scss.dsa}>
            <span className={scss.yqfa}>
              <img src="./assets/images/a4.png" alt="" />
            </span>
            <div className={scss.hia}>
              <p className={scss.oiu}>Coins.game</p>
              <p className={scss.igo}>
                Xin chào! Tôi có thể giúp bạn như thế nào?
              </p>
            </div>
          </div>
          <div className={scss.pw}>
            <form action="">
              <input type="text" placeholder="nhập tin nhắn..." />
            </form>
          </div>
          <div className={scss.bb}>
            <span>
              <img src="./assets/images/a5.png" alt="" />
            </span>
            <span>
              <img src="./assets/images/a6.png" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className={scss.help} onClick={() => opena()}>
        <img src="./assets/images/a7.png" alt="" />
      </div>

      {/* sidebar */}

      <div className="sidebar">
        <a href="#">
          <img src="./assets/images/b10.png" alt="" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src="./assets/images/b12.png" alt="" />
          <span>Originals </span>
        </a>
        <a href="#">
          <img src="./assets/images/b11.png" alt="" />
          <span>Live Casino </span>
        </a>
        <a href="#">
          <img src="./assets/images/b1.png" alt="" />
          <span>Sport </span>
        </a>
        <a href="#">
          <img src="./assets/images/b2.png" alt="" />
          <span>Esport</span>
        </a>
        <a href="#">
          <img src="./assets/images/b3.png" alt="" />
          <span>Slots </span>
        </a>
        <a href="#">
          <img src="./assets/images/b4.png" alt="" />
          <span>Promotions </span>
        </a>
        <a href="#">
          <img src="./assets/images/b5.png" alt="" />
          <span>Affiliate </span>
        </a>
        <a href="#">
          <img src="./assets/images/b6.png" alt="" />
          <span>Vip Club </span>
        </a>
        <a href="#">
          <img src="./assets/images/b7.png" alt="" />
          <span>Free Boxes </span>
        </a>
        <a href="#">
          <img src="./assets/images/b8.png" alt="" />
          <span>Tournaments </span>
        </a>
        <a href="#">
          <img src="./assets/images/b9.png" alt="" />
          <span>Help Center</span>
        </a>
        <div className="botb" id="closeb">
          <div className="netw">
            <span>Social Media</span>
            <div className="social">
              <img src="./assets/images/c1.png" alt="" />
              <img src="./assets/images/c2.png" alt="" />
              <img src="./assets/images/c3.png" alt="" />
              <img src="./assets/images/c4.png" alt="" />
              <img src="./assets/images/c5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
