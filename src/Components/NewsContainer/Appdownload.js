import "./Appdownload.css";

const Appdownload = () => {
  return (
    <>
      <div className="download">
        <span className="d-text">
          For the best experience use <b>inShorts</b> app on your smartphone
        </span>

        <img
          src="https://assets.inshorts.com/website_assets/images/appstore.png"
          height="80%"
          alt="ios-download"
        />
        <img
          src="https://assets.inshorts.com/website_assets/images/playstore.png"
          height="80%"
          alt="Android-download"
        />
      </div>
    </>
  );
};

export default Appdownload;
