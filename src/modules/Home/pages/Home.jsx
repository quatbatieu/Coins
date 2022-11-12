import Banner from "../components/Banner";
import Biggest from "../components/Biggest";
import Crypto from "../components/Crypto";
import Games from "../components/Games";
import Latest from "../components/Latest";
import Menu1 from "../components/Menu1";
import Menu2 from "../components/Menu2";
import Menu3 from "../components/Menu3";
import TopGame from "../components/TopGame";
import HitGame from "../components/HitGame";
import HotGame from "../components/HotGame";
import LiveGame from "../components/LiveGame";
// import Mobie from "../components/Mobie";
import scss from "./style.module.scss";

const Home = () => {
  return (
    <div className={scss.bg}>
      <div className={scss.imga}>
        <Banner />
        <Crypto />
        <Menu1 />
        <Games />
        <TopGame />
        <Menu2 />
        <HitGame />
        <HotGame />
        <HotGame />
        <Menu3 />
        <LiveGame />
        <Biggest />
        <Latest />
      </div>
    </div>
  );
};

export default Home;
