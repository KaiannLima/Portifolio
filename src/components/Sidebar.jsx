import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Kaiann Lima" />
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="src/img/curriculo.jpg" download="Matheus Kaiann Pinto Lima-CURRICULO" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
