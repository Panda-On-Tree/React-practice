import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import { NewsContext } from "../Context";
import Loading from "../components/Loading";

const Home = () => {
  //const {trendingNews} =useGlobalContext();
  const [trendingNews, setTrendingNews] = useContext(NewsContext);

  const fun = () => {
    //document.getElementById('heading').innerHTML="aniket";
    console.log("aniket");
  };

  return (
    <div>
    <div className={styles.homePage}>
      <div className={styles.trendingnews}>
        <div className={styles.trendingleft}>
          <img src={trendingNews[1].urlToImage} alt="" />
        </div>
        <div className={styles.trendingright}>
          <h5>Trending</h5>
          <h1>{trendingNews[1].title}</h1>
          <h3>{trendingNews[1].content}</h3>
        </div>
      </div>
      <div className={styles.breakingnews}>
        <div className={styles.breakingnewscontainer}>
          <div className={styles.breakingnewsheading}>
          <h2>Breaking News</h2>
          </div>
          <marquee className={styles.marque} behavior="" direction="">{trendingNews[3].title}</marquee>
        </div>
      </div>
      <div>a</div>

    </div>
    </div>
  );
};

export default Home;
