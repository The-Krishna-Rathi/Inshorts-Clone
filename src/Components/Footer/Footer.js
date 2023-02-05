import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//Footer Component
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="copy">&copy; copyright 2023 Krishna Rathi</div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/krishna-rathi-7a3674190/">
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://github.com/The-Krishna-Rathi/The-Krishna-Rathi">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://www.facebook.com/inshortsapp">
            <FacebookIcon className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
