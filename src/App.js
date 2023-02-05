import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./Components/Navbar/navInshorts";
import NewsContainer from "./Components/NewsContainer/NewsContainer";

function App() {
  const [category, setCategory] = useState("general");
  let [resultNews, setResultNews] = useState([]);
  let [totalResults, setTotalResults] = useState();
  let [loadMore, setLoadMore] = useState(20);

  const fetchNews = async () => {
    console.log(category);
    try {
      resultNews = await axios.get(
        `${process.env.REACT_APP_API_URL}?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}`
      );

      console.log(resultNews);
      setTotalResults(resultNews.data.totalResults);
      setResultNews(resultNews.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, totalResults, loadMore]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContainer
        resultNews={resultNews}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        totalResults={totalResults}
      />
    </div>
  );
}

export default App;
