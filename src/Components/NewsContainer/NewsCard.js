import "./NewsCard.css";

const NewsCard = ({ news }) => {
  let imgsrc =
    news.urlToImage !== null
      ? news.urlToImage
      : "https://kluban.net/wp-content/uploads/2015/05/blank-thumbnail.jpg";

  let author = news.author !== null ? news.author : "Anonymous";

  const fullDate = new Date(news.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <>
      <div className="main-container">
        <div className="card-container">
          <div className="card-image">
            <img src={imgsrc} alt="news-thumbnail" />
          </div>
          <div className="card-content">
            <div className="card-title">{news.title}</div>
            <div className="author">
              <b>
                {" "}
                <a
                  href={news.url}
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                  rel="noopener"
                >
                  short
                </a>
              </b>{" "}
              by {author} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)}pm`
                : `${hour}:${date[4].substring(3, 5)}am`}{" "}
              on {date[2]} {date[1]}, {date[0]}
            </div>
            <div className="description">{news.description}</div>
            <div className="read-more">
              read more at{" "}
              <b>
                <a
                  href={news.url}
                  target="_blank"
                  style={{ color: "black", textDecoration: "none" }}
                  rel="noopener"
                >
                  {news.source.name}
                </a>
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
