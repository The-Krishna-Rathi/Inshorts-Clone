import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./Components/Navbar/navInshorts";
import NewsContainer from "./Components/NewsContainer/NewsContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("general"); //to manage the category of news
  let [resultNews, setResultNews] = useState([]); //to manage the array of news
  let [totalResults, setTotalResults] = useState(); //to manage the total result count
  let [loadMore, setLoadMore] = useState(20); //to manage if more results are needed to be loaded

  const fetchNews = async () => {
    // console.log(category);
    try {
      // URL used from News API if required go through if its break API_URL and API_KEY in news api
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"; //Proxy URL to work on netlify as the link is not working on various browsers
      resultNews = await axios.get(
        `${proxyUrl}${process.env.REACT_APP_API_URL}?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}`
      );

      // console.log(resultNews);
      setTotalResults(resultNews.data.totalResults);
      setResultNews(resultNews.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  //Since, we are using an api that neededs to be called when anyone of three changes i.e category(user selects a different category), totalResults(for a different category, a different result count has to be set) and loadMore(If a user want's to load more results)
  useEffect(() => {
    fetchNews();
    //eslint-disable-next-line
  }, [category, totalResults, loadMore]);

  return (
    <div className="App">
      {/* {Navigation Bar} */}
      <NavInshorts setCategory={setCategory} />
      {/* {News display container} */}
      <NewsContainer
        resultNews={resultNews}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        totalResults={totalResults}
      />
      <Footer />
    </div>
  );
}

export default App;
