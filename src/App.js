import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavInshorts from "./Components/Navbar/navInshorts";

function App() {
  const [category, setCategory] = useState("general");
  let [resultNews, setResultNews] = useState([]);

  const fetchNews = async () => {
    try {
      resultNews = await axios.get(
        `${process.env.REACT_APP_API_URL}?category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      setResultNews(resultNews.data.sources);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="App">
      <NavInshorts />
    </div>
  );
}

export default App;
