import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./Components/Navbar/navInshorts";
import NewsContainer from "./Components/NewsContainer/NewsContainer";

function App() {
  const [category, setCategory] = useState("general");
  let [resultNews, setResultNews] = useState([]);

  const fetchNews = async () => {
    console.log(category);
    try {
      resultNews = await axios.get(
        `${process.env.REACT_APP_API_URL}?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      console.log(resultNews.data.articles);
      setResultNews(resultNews.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContainer resultNews={resultNews} />
    </div>
  );
}

export default App;
