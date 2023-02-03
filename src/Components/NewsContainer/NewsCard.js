import "./NewsCard.css";

const NewsCard = () => {
  return (
    <>
      <div className="main-container">
        <div className="card-container">
          <div className="card-image">
            <img src="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/02_feb/3_fri/img_1675442017606_44.jpg?" />
          </div>
          <div className="card-content">
            <div className="card-title">
              Centre reviewing Adani Group's financial statements: Report
            </div>
            <div className="author">
              <b>short</b> by Apaar Sharma / 10:24 pm on 03 Feb 2023,Friday
            </div>
            <div className="description">
              The Ministry of Corporate Affairs has started a preliminary review
              of Adani Group's financial statements and other regulatory
              submissions made over the years, Reuters reported. "An inquiry has
              been initiated by (the) Director General of Corporate Affairs. The
              ministry has been closely monitoring the situation and will take
              appropriate measures in time," an official told Reuters.
            </div>
            <div className="read-more">
              read more at <b>Hindustan Times</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
