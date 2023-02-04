import "./NewsContainer.css";
import Container from "@mui/material/Container";
import Appdownload from "./Appdownload";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

const NewsContainer = ({ resultNews }) => {
  const [maxWidthValue, setMaxWidthValue] = useState("md");

  useEffect(() => {
    function consoleResize() {
      if (window.innerWidth < 870) {
        setMaxWidthValue("sm");
      }

      if (window.innerWidth >= 870) {
        setMaxWidthValue("md");
      }
    }

    window.addEventListener("resize", consoleResize);
    return () => {
      window.removeEventListener("resize", consoleResize);
    };
  });

  return (
    <>
      <Container maxWidth={maxWidthValue} className="container">
        <Appdownload />
        {resultNews.map((news) => {
          return <NewsCard news={news} key={news.title} />;
        })}
      </Container>
    </>
  );
};

export default NewsContainer;
