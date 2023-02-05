import HambrugerDrawer from "./HambrugerDrawer";
import "./NavInshorts.css";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="logo">
        <HambrugerDrawer setCategory={setCategory} />
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="Inshorts Logo"
      />
    </div>
  );
};
export default NavInshorts;
