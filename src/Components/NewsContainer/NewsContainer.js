import "./NewsContainer.css";
import Container from "@mui/material/Container";
import Appdownload from "./Appdownload";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

const NewsContainer = () => {
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
        <NewsCard />
      </Container>
    </>
  );
};

export default NewsContainer;
