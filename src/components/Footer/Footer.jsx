import React from "react";
import scss from "./style.module.scss";

const Footer = () => {
  return (
    <div className={scss.footer}>
      <div className={scss.container}>
        <img src="./img/js.png" alt="" className={scss.imgs} />
        <div className={scss.flexa}>
          <div className={scss.desc}>
            "This website offers gambling with a risk factor. You must be over
            the age of 18 to be a user of our site. We are not responsible for
            violating any local laws in your area regarding online gambling.
            Play responsibly and have fun with Coins Game."
          </div>
          <div className={scss.line}></div>
          <div className={scss.entris}>
            <a href="#">Help Center</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Gambling Awareness</a>
            <a href="#">AML</a>
            <a href="#">SELF-EXCLUSION</a>
          </div>
          <div className={scss.us}>
            <div className={scss.contact}>
              <div className={scss.ttu}>CONTACT US</div>
              <div className={scss.info}>
                <div className={scss.left}>
                  <div className={scss.item}>
                    <span>Get help:</span>
                    <a href="#">Help.coins.game</a>
                  </div>
                </div>
                <div className={scss.right}>
                  <div className={scss.item}>
                    <span>Business :</span>
                    <a href="#">Business@coins.game</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.currencies}>
              <div className={scss.ttu}>ACCEPTED CURRENCIES</div>
              <div className={scss.list}>
                <div class={scss.itema}>
                  <img src="./img/1.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/2.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/3.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/4.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/5.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/6.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/7.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/8.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/9.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/10.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/11.png" alt="" />
                </div>
                <div class={scss.itema}>
                  <img src="./img/12.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.license}>
          <div className={scss.layit}>
            <div className={scss.desc}>
              <img src="./img/SimpleLogo.png" alt="" />
              <p>
                Coins.Game is operated by Royal Way N.V. (Commercial register of
                Curaçao no. 161620, Abraham de Veerstraat 9, Willemstad,
                Curaçao) under a sublicense Gaming Curacao pursuant to Master
                gaming Licens/JAZ.
              </p>
            </div>
          </div>
          <div className={scss.cert}>
            <svg width="62" height="31" xmlns="http://www.w3.org/2000/svg">
              <path d="M52.314 27c.285-.003.569.05.834.155a1.888 1.888 0 011.057 1.057c.1.25.15.518.147.787.002.27-.048.538-.147.79a1.87 1.87 0 01-1.057 1.058 2.355 2.355 0 01-1.67 0 1.871 1.871 0 01-1.062-1.058 2.195 2.195 0 010-1.58 1.873 1.873 0 011.061-1.055c.266-.105.55-.157.837-.154zm-21 0c.286-.003.57.05.835.155a1.888 1.888 0 011.057 1.057c.1.25.149.518.147.787.002.27-.048.538-.147.79a1.87 1.87 0 01-1.057 1.058 2.355 2.355 0 01-1.67 0 1.871 1.871 0 01-1.062-1.058 2.195 2.195 0 010-1.58 1.873 1.873 0 011.061-1.055c.266-.105.55-.157.837-.154zm-5.356.043a2.26 2.26 0 01.834.147 1.818 1.818 0 011.057 1.033c.1.247.15.51.149.776a2.04 2.04 0 01-.147.783 1.831 1.831 0 01-.414.625 1.882 1.882 0 01-.643.409c-.267.1-.55.15-.834.146h-1.528v-3.92h1.526zm-21.23 0a.328.328 0 01.195.053c.05.036.088.085.108.143l.76 2.095a7.533 7.533 0 01.203.637c.025-.118.054-.231.088-.338a7.07 7.07 0 01.099-.3l.752-2.094a.312.312 0 01.304-.196h.739l-1.577 3.914h-.825L4 27.043h.729zm51.338 0c.245-.005.49.024.726.087.179.048.345.13.49.244a.921.921 0 01.277.368 1.294 1.294 0 01.035.823 1.089 1.089 0 01-.403.568c-.103.078-.217.14-.339.185a.86.86 0 01.172.112.672.672 0 01.14.164L58 30.956h-.825a.35.35 0 01-.329-.173l-.652-1.135a.275.275 0 00-.102-.108.34.34 0 00-.163-.032h-.23v1.449h-.91v-3.914h1.277zm-5.813 0v.72h-1.106v3.194h-.9v-3.195H47.14v-.72h3.112zm-4.255 0l1.521 3.914h-.706a.327.327 0 01-.195-.055.284.284 0 01-.107-.141l-.232-.682h-1.495l-.232.682a.312.312 0 01-.297.196h-.711l1.521-3.914h.933zm-4.445 0c.245-.005.49.024.727.087.178.048.345.13.49.244a.921.921 0 01.276.368 1.2 1.2 0 01.086.463c0 .121-.016.243-.051.36a1.089 1.089 0 01-.403.568c-.103.078-.217.14-.338.185a.86.86 0 01.172.112.672.672 0 01.139.164l.836 1.362h-.821a.35.35 0 01-.329-.173l-.652-1.135a.275.275 0 00-.101-.108.34.34 0 00-.163-.032h-.234v1.449h-.912v-3.914h1.278zm-1.794 0v.698h-1.613v.913h1.235v.672h-1.235v.932h1.613v.699h-2.53v-3.914h2.53zm-4.583 0c.242-.005.483.028.714.098.18.056.347.148.49.27.126.111.224.25.285.406.061.16.092.33.091.5a1.48 1.48 0 01-.094.537c-.061.16-.16.304-.288.419a1.36 1.36 0 01-.492.272c-.228.07-.466.102-.705.098l-.475.006v1.308h-.912v-3.914h1.386zm-11.26 0v.698h-1.613v.913h1.237v.672h-1.235v.932h1.612v.699h-2.531v-3.914h2.53zm-3.26 0v3.914h-.916v-3.914h.916zm-1.47 0v.698h-1.613v.99h1.344v.702h-1.344v1.524h-.916v-3.914h2.53zm-3.257 0l-.001 3.914h-.916v-3.914h.917zm-3.307 0c.245-.005.49.024.726.087.179.048.345.13.49.244a.921.921 0 01.276.368 1.294 1.294 0 01.036.823 1.089 1.089 0 01-.403.568c-.103.078-.217.14-.339.185a.86.86 0 01.172.112.672.672 0 01.14.164l.836 1.362h-.823a.35.35 0 01-.328-.173l-.652-1.135a.275.275 0 00-.102-.108.34.34 0 00-.163-.032h-.235v1.449h-.909v-3.914h1.278zm-1.795 0v.698H9.215v.913h1.235v.672H9.215v.932h1.612v.699h-2.53v-3.914h2.53zm15.133.7h-.61v2.517h.61c.16.002.318-.027.466-.088a.943.943 0 00.346-.25c.099-.116.173-.25.217-.396.053-.17.078-.348.076-.527a1.7 1.7 0 00-.076-.523 1.123 1.123 0 00-.217-.396.943.943 0 00-.346-.25 1.182 1.182 0 00-.466-.088zm26.354.004a1.214 1.214 0 00-.47.086.934.934 0 00-.348.25 1.103 1.103 0 00-.217.394c-.1.342-.1.706 0 1.048.045.145.119.279.217.394a.931.931 0 00.348.25c.15.058.309.087.47.084.16.003.318-.026.466-.084a.924.924 0 00.346-.25c.099-.115.173-.25.217-.394.053-.17.078-.348.076-.526a1.687 1.687 0 00-.076-.522 1.107 1.107 0 00-.217-.394.937.937 0 00-.346-.25 1.198 1.198 0 00-.466-.086zm-21 0a1.214 1.214 0 00-.47.086.934.934 0 00-.347.25 1.103 1.103 0 00-.217.394c-.1.342-.1.706 0 1.048.045.145.118.279.217.394a.936.936 0 00.347.25c.15.058.31.087.47.084.16.003.319-.026.467-.084a.924.924 0 00.346-.25c.099-.115.173-.25.217-.394.053-.17.078-.348.076-.526a1.687 1.687 0 00-.076-.522 1.107 1.107 0 00-.217-.394.937.937 0 00-.346-.25 1.198 1.198 0 00-.466-.086zm14.219.099a4.859 4.859 0 01-.176.545l-.361 1.067h1.074l-.362-1.072-.082-.24a5.441 5.441 0 01-.093-.3zm-10.36-.131h-.47v1.25h.473a.58.58 0 00.669-.643.705.705 0 00-.04-.25.5.5 0 00-.126-.19.553.553 0 00-.208-.125.924.924 0 00-.299-.042zm20.898.014h-.366l-.005 1.155h.366a.94.94 0 00.317-.047.574.574 0 00.215-.125.5.5 0 00.125-.195.747.747 0 00.038-.24.499.499 0 00-.168-.404.787.787 0 00-.522-.144zm-14.513 0h-.366l-.005 1.155h.366a.94.94 0 00.318-.047.574.574 0 00.214-.125.5.5 0 00.126-.195.747.747 0 00.037-.24.499.499 0 00-.168-.404.787.787 0 00-.522-.144zm-28.933 0h-.372v1.155h.367a.94.94 0 00.317-.047.574.574 0 00.214-.125.5.5 0 00.126-.195.747.747 0 00.037-.24.499.499 0 00-.168-.404.787.787 0 00-.521-.144zM60.64 0C61.391 0 62 .618 62 1.38v22.24A1.37 1.37 0 0160.641 25H1.36A1.37 1.37 0 010 23.62V1.38C0 .617.608 0 1.359 0H60.64zm0 1.254H1.36a.124.124 0 00-.124.125v22.242c0 .069.055.125.124.125h59.28a.124.124 0 00.124-.125V1.379a.124.124 0 00-.124-.125zM22 4v18h-1V4h1zM6.582 7.403a.571.571 0 01.724-.373.59.59 0 01.365.74 2.62 2.62 0 00.515 2.502.372.372 0 00.057.046l.019-.028-.012.033c.015.01.029.022.042.034a.59.59 0 01.156.448.578.578 0 01-.156.44.566.566 0 01-.81 0 .417.417 0 01-.048-.062.589.589 0 00-.064-.085 2.482 2.482 0 00-1-.577 2.491 2.491 0 00-1.545.057 2.885 2.885 0 00-.96.633 2.62 2.62 0 00-.273 3.284 2.78 2.78 0 001.26.982c.131.214.731.228 1.52.037.425-.111.81-.341 1.11-.665a.567.567 0 01.812 0 .6.6 0 01.013.817l-.018.02a.086.086 0 00-.016.036 2.627 2.627 0 00-.61 2.632c.107.397.322.755.62 1.033.292.288.648.499 1.037.613l.061.02.03-.06a1.362 1.362 0 011.213-.774c.76 0 1.376.63 1.376 1.407S11.384 22 10.624 22a1.353 1.353 0 01-1.177-.712l-.018-.03-.033-.006a3.656 3.656 0 01-1.93-1.035 3.327 3.327 0 01-.91-1.538 3.76 3.76 0 01-.085-1.898l.024-.115-.192.038a3.194 3.194 0 01-.615.087 3.63 3.63 0 01-1.246-.221 4.028 4.028 0 01-1.788-1.406 3.84 3.84 0 01.422-4.81c.493-.45.93-.733 1.373-.889a3.58 3.58 0 011.942-.115l.11.023-.02-.113a3.83 3.83 0 01.1-1.857zm25.225 9.651v2.309c-.002.125.015.249.05.368.03.102.08.195.146.276a.627.627 0 00.233.173.77.77 0 00.313.061.774.774 0 00.312-.06.635.635 0 00.233-.172.774.774 0 00.146-.274c.035-.12.052-.244.05-.368v-2.313h.871v2.311a1.87 1.87 0 01-.111.66 1.441 1.441 0 01-.828.854 1.941 1.941 0 01-1.349 0 1.441 1.441 0 01-.508-.338 1.47 1.47 0 01-.318-.516 1.89 1.89 0 01-.11-.66v-2.31h.87zm20.347-.05c.272-.004.543.048.797.154.23.096.438.24.613.422.171.182.306.4.394.638.096.25.145.516.144.785.002.27-.045.536-.14.787-.18.482-.546.864-1.009 1.055a2.16 2.16 0 01-1.594 0 1.829 1.829 0 01-1.013-1.055 2.28 2.28 0 010-1.575 1.828 1.828 0 011.01-1.059c.253-.104.524-.156.798-.153zm-23.531 0c.272-.004.543.048.797.154.23.096.438.24.613.422.171.182.306.4.394.638.096.25.145.516.144.785.002.27-.045.536-.14.787-.18.482-.546.864-1.009 1.055a2.16 2.16 0 01-1.594 0 1.829 1.829 0 01-1.013-1.055 2.28 2.28 0 010-1.575 1.828 1.828 0 011.01-1.059c.253-.104.524-.156.798-.153zm-2.207.05v.702h-1.54v.988h1.282v.7h-1.283v1.518H24v-3.908h2.416zm21.98 0v.718H47.34v3.189h-.87v-3.189h-1.057v-.718h2.982zm-13.209 0a.73.73 0 01.094.006c.024.003.047.01.07.02.021.01.04.025.058.042a.7.7 0 01.064.073l1.783 2.346a7.458 7.458 0 01-.016-.218 1.614 1.614 0 010-.199v-2.07h.768v3.903h-.46a.404.404 0 01-.17-.032.372.372 0 01-.133-.117l-1.768-2.327.012.2a1.86 1.86 0 010 .183v2.092h-.76v-3.902h.458zm19.793 0c.034 0 .069.001.103.006.024.003.048.01.07.02.021.01.041.025.059.042a.7.7 0 01.063.073l1.777 2.346a7.458 7.458 0 01-.016-.218 1.614 1.614 0 010-.199v-2.07h.768v3.903h-.454a.404.404 0 01-.17-.032.372.372 0 01-.134-.117l-1.77-2.325c.006.068.01.134.013.199a1.86 1.86 0 010 .183v2.092h-.768v-3.903h.459zm-10.654 0l1.453 3.902h-.675a.282.282 0 01-.288-.195l-.222-.68h-1.426l-.224.68a.298.298 0 01-.283.195h-.68l1.453-3.902h.892zm5.379 0l.004 3.902h-.88v-3.902h.876zm-9.627 0c.273-.003.543.047.797.148.23.092.438.23.614.407.17.175.305.386.394.617.096.247.144.511.141.777.003.267-.044.532-.14.78a1.831 1.831 0 01-.394.62 1.786 1.786 0 01-.613.406c-.255.1-.525.15-.797.145h-1.46v-3.9h1.458zm0 .69h-.583v2.51h.582c.153.003.304-.026.445-.087a.902.902 0 00.331-.255c.095-.115.165-.25.208-.395.05-.166.074-.34.073-.514h-.001a1.765 1.765 0 00-.072-.522 1.13 1.13 0 00-.208-.395.903.903 0 00-.33-.255 1.086 1.086 0 00-.446-.087zm-11.454.014a1.116 1.116 0 00-.449.086.894.894 0 00-.332.246 1.118 1.118 0 00-.207.393 1.928 1.928 0 000 1.044c.042.145.113.278.207.393a.88.88 0 00.332.245c.143.058.295.087.449.084.152.003.303-.026.445-.084a.883.883 0 00.331-.245c.094-.115.165-.248.207-.393.05-.17.076-.346.074-.524h-.001a1.75 1.75 0 00-.073-.52 1.117 1.117 0 00-.207-.393.897.897 0 00-.331-.246 1.1 1.1 0 00-.445-.086zm23.53 0a1.116 1.116 0 00-.448.086.894.894 0 00-.332.246 1.118 1.118 0 00-.207.393 1.928 1.928 0 000 1.044c.042.145.113.278.207.393a.88.88 0 00.332.245c.143.058.295.087.449.084.152.003.303-.026.445-.084a.883.883 0 00.331-.245c.094-.115.165-.248.207-.393a1.76 1.76 0 00.077-.524h-.004a1.75 1.75 0 00-.073-.52 1.117 1.117 0 00-.207-.393.897.897 0 00-.331-.246 1.1 1.1 0 00-.445-.086zm-8.273.097a6.38 6.38 0 01-.085.303 3.819 3.819 0 01-.082.24l-.346 1.065h1.025l-.345-1.07-.079-.24a5.458 5.458 0 01-.088-.298zM10.382 4c.447.006.862.239 1.108.623l.018.033h.032a3.633 3.633 0 011.987 1.05c.435.419.75.954.908 1.545.18.59.213 1.22.093 1.826l-.02.113.11-.023a3.525 3.525 0 011.946.116 4.025 4.025 0 011.787 1.415c1.005 1.504.827 3.533-.423 4.828-.495.456-.931.74-1.372.894a3.538 3.538 0 01-1.233.222 3.478 3.478 0 01-.708-.1l-.137-.028.024.123a3.907 3.907 0 01-.093 1.956.572.572 0 01-.544.407.573.573 0 01-.51-.323.593.593 0 01-.034-.45c.3-.932.063-1.959-.613-2.652v-.018a.177.177 0 00-.034-.07l-1.02-1.05-.032-.035-.045.015a1.422 1.422 0 01-1.66-.496 1.526 1.526 0 01-.015-1.78 1.423 1.423 0 011.65-.526 1.49 1.49 0 01.88 1.897l-.013.045 1.112 1.143c.307.318.689.548 1.108.67a2.489 2.489 0 001.543-.058c.358-.144.683-.36.958-.636a2.65 2.65 0 00.272-3.303 2.78 2.78 0 00-1.258-.987 2.473 2.473 0 00-1.519-.047 2.49 2.49 0 00-1.004.585.694.694 0 00-.058.083.503.503 0 01-.046.06.554.554 0 01-.636.122.585.585 0 01-.33-.572.588.588 0 01.154-.443.36.36 0 01.048-.037.542.542 0 00.065-.052 2.65 2.65 0 00.509-2.507c-.109-.4-.324-.76-.62-1.04a2.457 2.457 0 00-.986-.599l-.066-.024-.028.066c-.275.65-.973.99-1.635.798-.662-.192-1.084-.859-.988-1.56.096-.702.68-1.222 1.368-1.219zm46.14 6.503a2.3 2.3 0 01.44.04c.129.024.256.06.38.11a1.724 1.724 0 01.575.374l-.26.403a.286.286 0 01-.085.088.199.199 0 01-.11.032.293.293 0 01-.159-.053 2.807 2.807 0 00-.195-.111 1.164 1.164 0 00-.387-.12 1.9 1.9 0 00-.237-.013 1.045 1.045 0 00-.44.09.949.949 0 00-.333.254 1.161 1.161 0 00-.212.393 1.64 1.64 0 00-.075.51c-.003.188.024.375.082.552a1.2 1.2 0 00.228.407c.095.11.213.198.345.255.138.06.287.09.437.088a1.426 1.426 0 00.581-.117v-.597h-.367a.176.176 0 01-.123-.046.155.155 0 01-.047-.115v-.498h1.334v1.648a1.887 1.887 0 01-.633.316c-.123.035-.249.06-.376.075a3.583 3.583 0 01-.429.024 1.863 1.863 0 01-1.77-1.201 2.128 2.128 0 01-.146-.795 2.246 2.246 0 01.138-.802c.088-.237.224-.452.398-.631.178-.18.391-.321.625-.412.262-.102.54-.152.82-.148zm-23.902 0a2.3 2.3 0 01.44.04c.13.024.257.06.38.11a1.724 1.724 0 01.575.374l-.252.4a.286.286 0 01-.086.087.199.199 0 01-.11.032.293.293 0 01-.159-.053 2.808 2.808 0 00-.195-.111 1.164 1.164 0 00-.387-.12 1.9 1.9 0 00-.237-.013 1.045 1.045 0 00-.44.09.949.949 0 00-.334.254 1.161 1.161 0 00-.212.393 1.64 1.64 0 00-.074.51 1.67 1.67 0 00.082.553c.049.15.126.288.228.406.095.11.213.198.344.255.14.062.29.093.443.092a1.426 1.426 0 00.581-.117v-.597h-.368a.176.176 0 01-.122-.046.155.155 0 01-.047-.115v-.498h1.323v1.648a1.887 1.887 0 01-.633.316c-.123.035-.249.06-.376.075a3.583 3.583 0 01-.43.024 1.863 1.863 0 01-1.77-1.201 2.128 2.128 0 01-.146-.795 2.246 2.246 0 01.139-.802 1.82 1.82 0 01.397-.631 1.81 1.81 0 01.626-.412c.262-.102.54-.152.82-.148zm11.918.047c.223-.004.445.021.662.075.159.04.309.112.442.21a.8.8 0 01.245.332c.054.139.08.287.078.437a.889.889 0 01-.035.255.756.756 0 01-.113.23.86.86 0 01-.199.193 1.26 1.26 0 01-.29.152c.208.04.4.146.548.303.122.15.185.343.178.54 0 .16-.031.317-.094.463a1.057 1.057 0 01-.272.373c-.13.115-.28.202-.441.256a1.85 1.85 0 01-.6.089l-1.49-.007v-3.9h1.381zm6.77 0c.033 0 .065.001.096.005.025.003.048.01.07.02a.285.285 0 01.06.043.7.7 0 01.063.073l1.788 2.346a7.458 7.458 0 01-.016-.218 1.614 1.614 0 010-.199v-2.07h.767v3.903h-.453a.404.404 0 01-.17-.032.372.372 0 01-.134-.117l-1.773-2.327.012.2a1.86 1.86 0 010 .183v2.091h-.768v-3.9h.459zm-3.902 0v3.178h1.39v.723h-2.26v-3.9h.87zm-10.838-.001l1.45 3.902h-.674a.282.282 0 01-.288-.195l-.222-.68h-1.427l-.222.68a.298.298 0 01-.283.195h-.68l1.452-3.902h.894zm13.593.001v3.901h-.875v-3.9h.875zm-7.62.001v3.9h-.768v-2.244c0-.109.005-.227.016-.353l-.994 2.006a.336.336 0 01-.123.141.335.335 0 01-.18.049h-.122a.335.335 0 01-.179-.049.336.336 0 01-.122-.141l-1-2.009.015.186c.004.061.004.118 0 .17v2.244h-.763v-3.898h.764a.174.174 0 01.136.056.28.28 0 01.053.079l.966 1.982c.035.066.068.136.1.209.032.073.062.148.092.226a4.135 4.135 0 01.193-.445l.963-1.973a.327.327 0 01.053-.08.173.173 0 01.136-.056h.764zm1.487 2.246v.972h.613a.74.74 0 00.282-.046.4.4 0 00.256-.28.747.747 0 00-.003-.378.32.32 0 00-.094-.144.447.447 0 00-.174-.09.976.976 0 00-.273-.032l-.607-.002zm-7.908-1.446a6.38 6.38 0 01-.165.546l-.347 1.062h1.025l-.346-1.07-.078-.24a5.458 5.458 0 01-.089-.298zm8.418-.125h-.51v.966h.454c.087 0 .174-.007.26-.022a.527.527 0 00.197-.075.34.34 0 00.123-.147.572.572 0 00.042-.236.689.689 0 00-.033-.232.331.331 0 00-.103-.15.425.425 0 00-.176-.08 1.166 1.166 0 00-.254-.024zM39.53 4a1.955 1.955 0 01.747.146 1.62 1.62 0 01.545.373l-.294.41a.375.375 0 01-.067.068.17.17 0 01-.108.031.186.186 0 01-.087-.022.947.947 0 01-.087-.052l-.102-.067a.771.771 0 00-.13-.067 1.056 1.056 0 00-.417-.074.952.952 0 00-.769.342 1.166 1.166 0 00-.218.393c-.054.166-.08.34-.078.516-.003.181.023.362.078.533.046.141.117.272.21.386a.91.91 0 00.701.325c.072 0 .145-.004.216-.012a.861.861 0 00.494-.234.303.303 0 01.068-.045.17.17 0 01.076-.011c.02 0 .041.003.061.011.022.01.042.024.059.042l.344.383a1.442 1.442 0 01-.567.464 1.92 1.92 0 01-.807.157 1.858 1.858 0 01-.766-.152 1.658 1.658 0 01-.574-.418 1.855 1.855 0 01-.368-.638 2.42 2.42 0 01-.123-.795 2.167 2.167 0 01.145-.802 1.81 1.81 0 011.023-1.043c.254-.1.524-.151.795-.148zm16.52.001c.272-.003.543.05.796.155a1.829 1.829 0 011.008 1.06c.096.247.146.512.146.779.003.271-.045.54-.141.793-.18.482-.546.864-1.01 1.055a2.16 2.16 0 01-1.593 0 1.829 1.829 0 01-1.014-1.055 2.28 2.28 0 010-1.575 1.828 1.828 0 011.01-1.059c.253-.104.524-.156.797-.153zm-13.654.045c.234-.005.468.024.694.087.17.047.33.13.468.242.115.1.205.228.259.372a1.325 1.325 0 01.033.82 1.104 1.104 0 01-.382.567c-.099.078-.208.14-.324.185a.82.82 0 01.163.112.665.665 0 01.132.163l.799 1.358h-.789a.331.331 0 01-.314-.17l-.623-1.133a.269.269 0 00-.096-.107.313.313 0 00-.156-.032l-.22-.006v1.443h-.87v-3.9h1.226zm11.695 0v.718h-1.056v3.188h-.87V4.764h-1.056v-.718h2.982zm-4.686 0c.23-.005.46.028.68.098.172.055.332.147.468.27.12.11.214.248.273.404a1.549 1.549 0 01-.004 1.039 1.076 1.076 0 01-.276.42 1.285 1.285 0 01-.47.273c-.217.07-.445.102-.673.098l-.45-.004v1.303h-.871v-3.9h1.323zM45 4.041a.275.275 0 01.18.055.407.407 0 01.109.14l.53 1.135.123.255c.036.077.068.153.096.228.026-.078.058-.155.093-.23l.115-.255.525-1.135a.339.339 0 01.175-.17.273.273 0 01.1-.018h.772l-1.355 2.418v1.483h-.87V6.464l-1.36-2.423H45zm11.052.709a1.116 1.116 0 00-.449.085.894.894 0 00-.332.247 1.118 1.118 0 00-.208.392 1.928 1.928 0 000 1.045c.043.146.113.28.208.397a.88.88 0 00.332.244c.143.059.295.087.449.085.152.002.303-.026.445-.085a.883.883 0 00.33-.244c.095-.115.166-.249.208-.393.05-.171.075-.35.072-.528a1.75 1.75 0 00-.072-.52 1.117 1.117 0 00-.207-.393.897.897 0 00-.331-.247 1.1 1.1 0 00-.445-.085zm-6.65-.032h-.45v1.244h.453a.623.623 0 00.49-.169c.106-.131.16-.3.15-.472a.73.73 0 00-.038-.243.498.498 0 00-.123-.189.524.524 0 00-.198-.127.847.847 0 00-.285-.044zm-7.01.008h-.351L42.04 5.88h.351a.863.863 0 00.303-.047.498.498 0 00.321-.321.774.774 0 00.036-.24.513.513 0 00-.16-.402.728.728 0 00-.499-.144z"></path>
            </svg>
            <svg width="34" height="33" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M9.698 19.312a.64.64 0 01.642.637.64.64 0 01-.642.636.64.64 0 01-.643-.636.64.64 0 01.643-.637zm8.922 2.601c-.623 0-.988.398-1.095 1.193h2.11c-.054-.795-.393-1.193-1.015-1.193zm-2.81-2.601a.64.64 0 01.642.637.64.64 0 01-.643.636h-1.504v4.648a.64.64 0 01-.642.637.64.64 0 01-.643-.637v-4.648h-1.504a.64.64 0 01-.643-.636.64.64 0 01.643-.637h4.293zm11.61.011c.343 0 .621.275.621.614v1.81c.364-.48.873-.73 1.527-.753.413-.009.775.132 1.084.42.299.28.454.664.463 1.152l.001.051v2.68c0 .34-.278.615-.62.615a.617.617 0 01-.62-.615v-2.472c-.14-.565-.378-.817-.982-.817-.355 0-.64.248-.853.746v2.543c0 .34-.278.615-.62.615a.617.617 0 01-.62-.615v-5.36c0-.339.277-.614.62-.614zM9.699 21.058c.342 0 .62.275.62.615v3.624c0 .34-.278.615-.62.615a.617.617 0 01-.62-.615v-3.624c0-.34.277-.615.62-.615zm15.3.17c.226.134.64.295.95.808.312.513-.03.888-.256.929-.227.041-.544.015-.827-.416-.282-.431-.938-.686-1.376-.438-.438.248-.715.721-.64 1.514.074.792.442 1.159.8 1.254.36.094 1.066.162 1.402-.625.09-.21.234-.39.5-.424a.528.528 0 01.464.168.599.599 0 01.147.42.763.763 0 01-.147.46c-.62.84-1.438 1.17-2.453.99-1.521-.27-1.962-1.488-2.012-1.936-.05-.447-.054-1.824.95-2.494 1.003-.67 2.273-.345 2.498-.21zm-5.594-.088c.635.177 1.064.552 1.288 1.127.337.861.101 1.548-.75 1.548h-2.42c.118.787.461 1.196 1.03 1.227.568.031 1.031-.184 1.39-.644.168-.19.354-.246.557-.168.203.077.293.23.269.46-.286.918-1.053 1.327-2.301 1.228-1.248-.1-1.966-.706-2.152-1.819-.138-1.23.119-2.086.77-2.567.651-.48 1.424-.611 2.32-.392zm-.65 8.142c-.087.19-.174 1.095.086 1.474.173.252.435.349.785.29.378-.079.613-.325.706-.739.14-.62-.113-1.508-.706-1.56-.592-.05-.785.343-.871.535zm-2.938.742a6.291 6.291 0 01-.951.193c-.397.056-.582.224-.555.505.087.438.386.579.898.423.512-.155.715-.529.608-1.121zM9.72 26.616c.343 0 .62.275.62.615v3.639h2.154c.27 0 .488.217.488.484a.487.487 0 01-.488.484H9.72a.617.617 0 01-.62-.614v-3.993c0-.34.278-.615.62-.615zm5.812 1.328c.717 0 1.142.32 1.274.961l.008.037v1.52c0 .399.044.634.133.706.134.109.089.407-.133.606-.143.128-.313.133-.51.016l-.025-.016-.359-.42c-.586.39-1.125.552-1.615.484-.735-.1-.948-.55-.985-.968-.038-.417-.04-.664.543-1.024.583-.36 1.986-.182 2.005-.514.02-.333-.067-.593-.527-.657-.46-.065-.86.182-.995.374-.133.193-.366.552-.683.283-.318-.27-.09-.684.127-.923.216-.24.646-.465 1.742-.465zm2.515-1.42a.51.51 0 01.512.507v1.422c.394-.32 1.196-.706 2.047-.292.985.48.82 2.039.731 2.454-.088.415-.62 1.315-1.551 1.259-.523-.031-.932-.223-1.227-.576v.069a.51.51 0 01-.512.507.51.51 0 01-.512-.507V27.03c0-.28.23-.507.512-.507zm5.711 1.457c.755 0 1.31.474 1.31.885 0 .274-.178.404-.535.39a.56.56 0 01-.217-.076c-.135-.103-.206-.196-.318-.314-.19-.2-.341-.236-.624-.236-.282 0-.632.201-.485.507.147.306.87.285 1.644.557.776.27.713.926.713 1.149 0 .223-.318.894-1.45 1.031-1.13.137-1.633-.508-1.726-.595-.094-.088-.378-.62.093-.846.47-.226.701.552.962.665.262.113 1.166.3 1.166-.255 0-.555-.957-.558-1.427-.715-.47-.157-1.091-.58-.897-1.3.194-.72 1.037-.847 1.791-.847z"></path>
                <path d="M30.439 16.264c-.031-.754-.202-1.827-.477-2.905-.365-1.434-.881-2.66-1.552-3.527-1.841-2.38-4.068-4.08-6.677-5.098l-.098-.088.132-.377-.397.063-.215-.337-.198.347-.4-.043.15.37-.283.282.385.114.046.396.33-.228.342.212.026-.398.014-.005c2.565.993 4.753 2.66 6.565 5.002.637.823 1.135 2.007 1.49 3.4.27 1.055.435 2.09.465 2.82h-3.712c-.064-1.57-.653-3.363-1.778-4.915-.382-.527-1.116-1.202-2.205-2.032l.438-.32-.716-.336.03-.784-.711.346-.6-.512-.171.766-.778.146.498.61-.37.694.792-.006.317.719.489-.617.765.203-.142-.591.207.16c.843.658 1.438 1.206 1.784 1.641l.088.116c1.083 1.494 1.648 3.207 1.71 4.712H22.91c-.07-1.707-1.07-3.153-2.98-4.32l.163-.087-.45-.293.095-.523-.51.165-.354-.4-.188.5-.536.024.276.456-.314.432.532.07.144.512.388-.368.494.207-.044-.472c1.896 1.123 2.865 2.483 2.931 4.097H5.095l.03.346c.034.338.08.661.143 1.026l.082.428c.206.992.525 1.952.986 2.885l.112.222c.332.643.62 1.074.856 1.288l.18-.189.098.293.31.026-.17.259.173.257-.31.029-.095.294-.216-.222-.291.11.04-.306-.268-.157.266-.16-.003-.025-.09-.095c-.246-.274-.515-.701-.814-1.286l-.032-.064-.06-.121-.195-.413a12.566 12.566 0 01-.904-2.994l-.06-.368a13.928 13.928 0 01-.12-1.063H2.08l.01.162c.007.103.014.199.022.287l.005.042.007.078.009.076.018.144c.036.254.093.583.173.986l.013.066.035.174.098.091.285-.123-.025.308.275.144-.258.172.057.303-.296-.093-.204.234-.112-.288-.31-.012.157-.266-.185-.248.2-.029L2 18.217a21.377 21.377 0 01-.185-1.026l-.006-.044-.017-.122-.014-.114-.014-.14a13.734 13.734 0 01-.037-.507H.358l.02.402c.115 1.85.434 3.392 1.26 5.22l.206.438a16.458 16.458 0 003.975 5.234l.078.069.236-.264.141.38.407.02-.21.345.237.328-.404.052-.11.39-.294-.281-.376.157.039-.402-.358-.194.341-.22-.033-.184-.352-.322a16.886 16.886 0 01-3.842-5.405l-.182-.417c-.75-1.8-1.041-3.48-1.136-5.345v-.054c0-.004.002-.008.001-.039v-.017h.004l.008-.16.02-.322C.67 6.976 7.993.116 16.934.116c9.141 0 16.592 7.173 16.93 16.148zM15.834 4.12l-.088.913-.883.28.667.638-.33.857.919-.118.471.79.48-.785.917.127-.3-.805.307.005c2.588.075 4.894.895 6.924 2.464l.303.24c.94.773 1.672 1.759 2.22 2.91.458.967.765 2.002.95 3.052a13.018 13.018 0 01.167 1.387l.01.178v.011h.348v-.07l-.004-.07a13.354 13.354 0 00-.177-1.496 12.259 12.259 0 00-.978-3.14c-.567-1.195-1.33-2.222-2.313-3.029-2.17-1.782-4.664-2.71-7.472-2.785l.367-.344-.88-.288-.079-.915-.776.502-.77-.51z"></path>
              </g>
            </svg>
            <svg width="90" height="32" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M9.557 27.927a5.107 5.107 0 01-3.786 1.301C2.98 29.001 1.022 27.06.627 24.141c-.351-2.663.27-5.006 2.548-6.639a5.45 5.45 0 014.462-.845 5.465 5.465 0 013.558 2.83c.233.472.217.727-.313.857-.076 0-.141.055-.211.076-.422.152-.828.505-1.26.423-.433-.081-.444-.672-.682-1.008a2.945 2.945 0 00-4.932.162 5.377 5.377 0 00-.13 5.522c.66 1.198 1.904 1.708 3.364 1.497a2.735 2.735 0 002.25-2.137c.13-.494 0-.613-.482-.586-.568.032-1.146 0-1.72 0-.573 0-.703-.163-.708-.689 0-1.302-.027-1.302 1.228-1.302h3.374c.395 0 .541.125.509.543v5.423c0 .543-.233.733-.736.695a2.696 2.696 0 00-.297 0c-.595-.006-1.255.108-.892-1.036zM.638 6.579V1.155c0-.287-.07-.613.444-.613 1.774.06 3.553-.114 5.321.109a3.541 3.541 0 013.11 2.918c.325 1.779-.297 3.173-1.839 3.97-.378.195-.373.342-.194.662.719 1.29 1.411 2.592 2.163 3.878.243.434.233.596-.335.59-2.385-.043-1.817.229-2.867-1.659-.454-.808-.865-1.627-1.309-2.451-.189-.347-1.876-.586-2.103-.288a.93.93 0 00-.076.5v3.085c0 .586-.238.792-.806.808-1.46.044-1.46.055-1.46-1.437L.638 6.58zm2.26-2.17v1.422c0 .249 0 .45.347.439.846.039 1.695.01 2.536-.087a1.663 1.663 0 001.455-1.866 1.7 1.7 0 00-1.584-1.681 7.06 7.06 0 00-.898-.054c-1.855-.044-1.855-.044-1.855 1.817v.01zm21.807 16.678c2.099-1.41 3.445-1.35 4.997.212a3.585 3.585 0 013.608-1.085 2.423 2.423 0 011.985 2.414c.038 1.876 0 3.758.032 5.64 0 .461-.168.673-.66.69-1.422.064-1.422.08-1.422-1.34V23.63c0-.96-.303-1.356-1.022-1.524a1.718 1.718 0 00-1.84.862 3.425 3.425 0 00-.378 1.747v3.607c0 .493-.14.645-.638.64-1.433 0-1.433 0-1.433-1.4V23.88c0-1.085-.422-1.693-1.217-1.801a1.861 1.861 0 00-1.882 1.416 9.496 9.496 0 00-.19 2.766v1.952c0 .543-.226.76-.773.743-1.622-.043-1.292.19-1.308-1.285v-6.319c0-.358-.028-.775.362-.911a2.756 2.756 0 011.622 0c.206.033.044.39.157.645zm43.851 6.574a4.22 4.22 0 01-2.618.786 3.95 3.95 0 01-1.52-.358c-1.763-.824-2.552-3.324-1.741-5.515a3.784 3.784 0 014.494-2.338 3.95 3.95 0 011.347.78c.21-.541 1.687-.932 2.098-.585.157.13.092.326.092.488 0 2.506.033 5.017 0 7.523-.037 2.018-.919 2.95-2.904 3.254a6.952 6.952 0 01-3.115-.152 2.708 2.708 0 01-1.898-1.952c-.13-.407 0-.543.394-.543h1.352a.589.589 0 01.541.223 2.16 2.16 0 002.656.65c.725-.33.99-.997.822-2.261zm-4.008-3.336c0 1.378.8 2.235 2.066 2.23 1.266-.006 2.072-.852 2.072-2.262 0-1.41-.774-2.31-2.06-2.31-1.288 0-2.089.878-2.078 2.315v.027zM39.13 20.93a3.778 3.778 0 012.941-.792c2.131.396 3.505 2.5 3.245 4.968-.05.424-.138.841-.265 1.248-.74 2.457-3.434 3.797-5.776 2.04-.34.975-1.157.493-1.752.51-.595.015-.449-.62-.449-.999V17.671c0-.613.146-.825.779-.792 1.493.07 1.303-.228 1.32 1.318-.038.862-.044 1.73-.044 2.733zm4.077 3.569a8.102 8.102 0 00-.19-.998 1.916 1.916 0 00-1.795-1.454 1.985 1.985 0 00-1.936 1.389A3.399 3.399 0 0039.378 26a1.796 1.796 0 001.693 1.161 1.946 1.946 0 001.828-1.085 3.801 3.801 0 00.308-1.578zm28.318-12.431c-.233.499-1.547.873-2.028.58-.19-.114-.146-.304-.146-.472V1.21c0-.45.162-.612.611-.64C71.39.49 71.39.477 71.39 1.963v2.029c0 .38.049.591.497.342 2.705-1.481 5.23.433 5.62 3.102a6.33 6.33 0 01-.076 2.235c-.465 2.261-3.115 4.501-5.906 2.397zM75.43 8.27a6.875 6.875 0 00-.07-.819 2.036 2.036 0 00-1.91-1.72 1.85 1.85 0 00-1.941 1.444 3.67 3.67 0 00.216 2.711 1.805 1.805 0 001.785 1.01 1.704 1.704 0 001.568-1.085c.232-.475.352-.996.352-1.525V8.27zM31.092 4.724a3.589 3.589 0 013.285-.753 3.6 3.6 0 012.464 2.304 5.824 5.824 0 01.125 3.97c-.665 2.083-3.202 3.65-5.89 1.844 0 .885-.038 1.693 0 2.495.038.646-.157.884-.833.863-1.26-.049-1.265 0-1.265-1.275v-8.65c0-1.628-.206-1.39 1.536-1.427.438-.01.616.136.578.63zm-.037 3.569c-.044 1.486.654 2.506 1.795 2.62 1.374.135 2.277-.852 2.288-2.512 0-1.502-.817-2.549-2.04-2.592-1.221-.044-2.006.976-2.043 2.484zm-9.963 20.643h-1.957c-.098 0-.26 0-.287-.038-.395-.765-.85-.196-1.26-.044a4.126 4.126 0 01-2.704.098 2.607 2.607 0 01-1.904-2.376 2.712 2.712 0 011.622-2.57 11.682 11.682 0 012.31-.608c.362-.092.735-.146 1.081-.255.244-.07.612-.043.617-.423a.895.895 0 00-.46-.808 1.917 1.917 0 00-2.606.754.443.443 0 01-.514.303l-.747-.043c-.962-.065-1.081-.217-.681-1.085a2.572 2.572 0 011.622-1.459 6.17 6.17 0 013.613-.092c1.33.342 1.871 1.036 1.899 2.425.027 1.55 0 3.107 0 4.659a2.45 2.45 0 00.356 1.562zm-4.494-1.628c1.477 0 2.196-.775 2.055-2.169 0-.206 0-.39-.324-.304-.763.206-1.552.337-2.315.543a.952.952 0 00-.67 1.443c.29.378.762.568 1.233.493l.021-.006zm-.762-18.511c-.828 0-1.65.038-2.477 0-.612-.032-.59.212-.411.657a2.494 2.494 0 003.964.786c.184-.168.292-.57.633-.407.51.256 1.003.55 1.47.879.103.065-.043.217-.113.314-.887 1.367-3.12 2.17-4.96 1.801-1.838-.369-2.98-1.627-3.33-3.607-.352-1.98.416-3.867 1.827-4.773a4.181 4.181 0 014.092-.314 4.203 4.203 0 012.398 3.34c.222 1.585.292 1.303-1.152 1.324-.643.011-1.292 0-1.941 0zm-1.082-1.524h1.487c.492 0 .541-.195.39-.591A1.774 1.774 0 0014.765 5.5a2.018 2.018 0 00-1.84 1.399c-.086.342.06.38.33.374.498-.01.996 0 1.493 0h.006zm72.028 1.524h-2.553c-.492 0-.54.18-.405.586a2.45 2.45 0 003.975.83.778.778 0 011.184-.114c1.174.727 1.19.727.124 1.627-2.639 2.273-6.695 1.172-7.495-2.028-.541-2.267.292-4.53 2.05-5.424 3.055-1.54 6.338.575 6.29 4.035 0 .364-.12.483-.471.477-.904 0-1.801.011-2.7.011zM85.7 7.273h1.493c.395 0 .47-.114.351-.482a1.79 1.79 0 00-1.806-1.297 2.012 2.012 0 00-1.909 1.389c-.092.325.038.396.324.39.525-.01 1.05-.005 1.574 0H85.7zm-43.147 5.63a4.32 4.32 0 01-3.221-1.388 4.347 4.347 0 01-1.138-3.325c.092-2.685 1.974-4.437 4.683-4.34 2.434.077 4.208 2.1 4.132 4.703-.076 2.604-1.947 4.42-4.456 4.35zm2.239-4.572a2.865 2.865 0 00-.26-1.28A2.05 2.05 0 0042.45 5.76a1.98 1.98 0 00-1.888 1.421 3.35 3.35 0 00.07 2.424 2.162 2.162 0 002.635 1.297c.946-.25 1.525-1.199 1.525-2.571zm5.354-3.498a3.893 3.893 0 012.769-1.004 2.475 2.475 0 012.472 2.36c.086 1.974.048 3.959.075 5.966 0 .368-.14.542-.54.542-1.569.125-1.564.136-1.564-1.421V7.512c0-.955-.438-1.486-1.162-1.59a1.698 1.698 0 00-1.899 1.129c-.152.452-.22.928-.2 1.405v3.46c0 .542-.124.77-.714.765-1.433 0-1.433.027-1.433-1.41V5.109c0-1.014 0-1.014.984-1.02.127.009.253.009.38 0 .491-.06.88.017.832.744zm10.254 8.07a5.938 5.938 0 01-3.564-1.188c-.33-.25-.373-.428 0-.667.167-.11.322-.24.46-.385.405-.434.735-.575 1.287-.087.757.62 1.782.8 2.704.472.427-.12.811-.347.811-.862s-.443-.602-.838-.7c-.968-.244-1.98-.304-2.899-.727-1.73-.797-2.028-2.712-.638-3.997a2.51 2.51 0 01.811-.542 5.067 5.067 0 015.144.661c.41.31.59.613.054.971a1.11 1.11 0 00-.217.206c-.432.472-.757.825-1.352.06-.54-.662-1.395-.732-2.223-.586-.438.076-.86.25-.897.76-.038.51.416.71.833.808.778.179 1.568.309 2.347.477 1.265.271 1.995.96 2.163 1.996a2.752 2.752 0 01-1.455 2.75 4.85 4.85 0 01-2.53.58zm-36.674-.011a5.658 5.658 0 01-3.174-1.15c-.347-.255-.438-.46 0-.71.085-.053.164-.116.232-.19.498-.515.903-.83 1.623-.168a2.644 2.644 0 002.639.347.862.862 0 00.714-.857c0-.483-.411-.58-.784-.662-.8-.184-1.623-.32-2.407-.542-1.325-.385-2.028-1.199-2.066-2.273a2.71 2.71 0 011.947-2.565 5.018 5.018 0 014.824.727c.487.358.65.678.07 1.085a.606.606 0 00-.108.097c-.46.543-.816.82-1.46.076-.644-.743-1.552-.743-2.445-.472a.764.764 0 00-.616.738c0 .342.251.632.59.678.849.206 1.708.363 2.558.542 1.325.288 2.055.993 2.206 2.12a2.794 2.794 0 01-1.568 2.686 5.206 5.206 0 01-2.775.493zm32.131 8.342a3.836 3.836 0 012.077-1.085 2.633 2.633 0 012.241.465 2.65 2.65 0 011.036 2.046c.087 1.899.033 3.797.054 5.712 0 .412-.156.542-.578.585-1.51.087-1.51.098-1.51-1.388V23.81c0-.911-.443-1.502-1.146-1.627a1.72 1.72 0 00-1.909 1.117 4.263 4.263 0 00-.238 1.476v3.53c0 .494-.173.651-.66.657-1.45 0-1.45.038-1.45-1.372v-6.395c0-.683.239-.911.872-.84.149.016.3.016.449 0 .535-.104.908.032.762.878zM80.54 6.666v5.266c0 .608-.15.835-.789.825-1.352-.028-1.352 0-1.352-1.335V1.627c0-1.085 0-1.085 1.082-1.085.15.011.3.011.449 0 .47-.06.59.158.584.608v5.483l.027.033zm-31.99 16.2v5.332c0 .542-.108.76-.703.754-1.384 0-1.384 0-1.384-1.389v-9.762c0-.331-.157-.814.238-.944a3.166 3.166 0 011.698 0c.233.06.13.396.13.613.018 1.793.025 3.592.021 5.396zm1.569 1.704v-3.678c0-.423.108-.542.54-.542 1.564 0 1.564-.049 1.564 1.502v6.308c0 .624-.195.824-.817.808-1.293 0-1.293 0-1.293-1.302l.006-3.097zM65.587 8.358V4.599c0-.385.097-.504.497-.542 1.59-.049 1.59-.065 1.59 1.546v6.161c0 .667-.157.938-.881.906-1.206-.06-1.212 0-1.212-1.248l.006-3.064z"></path>
                <rect
                  x="50.27"
                  y="17.139"
                  width="1.622"
                  height="1.627"
                  rx=".6"
                ></rect>
                <rect
                  x="65.819"
                  y=".868"
                  width="1.622"
                  height="1.627"
                  rx=".6"
                ></rect>
              </g>
            </svg>
            <svg width="31" height="36" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.984.828l.516.329c2.242 1.43 4.09 2.314 5.521 2.655 1.083.259 2.636.377 4.648.35l.829-.019c.284-.008.577-.02.877-.034l1.511-.08v8.75h-2V6.13l-.36.014c-2.415.073-4.315-.034-5.713-.329l-.256-.057c-1.485-.355-3.245-1.154-5.297-2.395l-.32-.197-.31.175c-1.913 1.065-3.555 1.778-4.94 2.137l-.293.072c-.562.128-1.245.234-2.051.315l-.628.057c-.109.01-.22.018-.332.026l-.697.044-.744.035-.79.027-.838.019-.926.009-.04.37c-.488 4.487-.466 8.24.06 11.252l.074.407.08.405.159.763c.742 3.426 1.522 4.992 3.526 7.465l.448.545c1.349 1.615 3.962 3.42 7.824 5.376l.384.192.761-.476.772-.49 1.083-.702.673-.445.634-.427.593-.41.555-.391.262-.189.494-.364.455-.346.415-.327.193-.157.354-.3.315-.28.143-.134c1.205-1.152 2.329-2.909 3.355-5.272l.192-.45 1.846.768c-1.175 2.827-2.506 4.96-4.011 6.4l-.321.296-.36.314-.4.33-.438.348c-.076.06-.154.12-.234.18l-.497.374-.537.39-.576.408-.615.425-.655.443-.694.46-.734.478-.774.496-.814.513-1.322.82-.496-.241a71.488 71.488 0 01-.926-.461l-.885-.457c-3.599-1.895-6.11-3.687-7.549-5.41l-.248-.3-.467-.577C2.211 24.87 1.382 22.932.522 18.49c-.666-3.437-.693-7.728-.09-12.882l.19-1.527 1.743.001.816-.008.772-.016.37-.01.709-.027.664-.034.621-.04.295-.024.555-.05c.178-.019.349-.038.512-.059l.468-.064c.297-.046.565-.096.803-.15 1.324-.304 3.034-1.048 5.113-2.236l.921-.537zm2.784 10.252c1.344 0 2.406.303 3.186.91.78.605 1.17 1.424 1.17 2.456 0 .552-.147 1.06-.441 1.521a3.226 3.226 0 01-1.197 1.107c.708.276 1.266.696 1.674 1.26.408.564.612 1.206.612 1.926 0 .744-.204 1.392-.612 1.944-.408.552-.987.978-1.737 1.278-.75.3-1.63.45-2.637.45-.996 0-1.87-.147-2.62-.44-.75-.295-1.328-.715-1.736-1.26-.408-.547-.612-1.186-.612-1.918 0-.72.216-1.37.648-1.953.432-.582 1.02-1.01 1.764-1.287a3.58 3.58 0 01-1.305-1.17 2.78 2.78 0 01-.477-1.566c0-.996.39-1.788 1.17-2.376.78-.588 1.83-.882 3.15-.882zm-6.708.126v12.6H8.216V13.618H5.678v-2.412h5.382zm6.726 7.056c-.732 0-1.3.15-1.701.45-.402.3-.603.732-.603 1.296 0 .564.2 1.002.603 1.314.402.312.969.468 1.7.468.733 0 1.303-.153 1.71-.459.409-.306.613-.74.613-1.305 0-.564-.204-.999-.612-1.305-.408-.306-.978-.459-1.71-.459zm10.87-3.979v2.31h2.247v1.58h-2.246v2.31h-1.772v-2.31H24.64v-1.58h2.246v-2.31h1.772zm-10.87-1.24c-.624 0-1.107.134-1.45.404-.341.27-.512.651-.512 1.143 0 .48.17.855.513 1.125.342.27.825.405 1.449.405.624 0 1.107-.132 1.449-.396.342-.264.513-.642.513-1.134 0-.492-.171-.873-.513-1.143-.342-.27-.825-.405-1.45-.405z"></path>
            </svg>
          </div>
        </div>
        <div className={scss.copyright}>
          <div className={scss.ttu}>©2021 COINSGAME ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
