import "./NewsContainer.css";
import Container from "@mui/material/Container";
import Appdownload from "./Appdownload";
import NewsCard from "./NewsCard";

const NewsContainer = () => {
  return (
    <>
      <Container maxWidth="md">
        <Appdownload />
        <NewsCard />
      </Container>
    </>
  );
};

export default NewsContainer;
