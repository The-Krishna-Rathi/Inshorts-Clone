import HambrugerDrawer from "./HambrugerDrawer";
import "./NavInshorts.css";

const NavInshorts = () => {
  return (
    <div className="nav">
      <div className="logo">
        <HambrugerDrawer />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
      />
    </div>
  );
};
export default NavInshorts;
