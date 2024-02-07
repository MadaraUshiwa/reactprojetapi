import React, { useEffect, useState } from "react";
import "./TopManga.css";
import { Link } from "react-router-dom";

function TopManga(props) {
  const [topManga, setTopManga] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/manga")
      .then((res) => res.json())
      .then((data) => setTopManga(data.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredManga = topManga
  ? topManga
      .filter((manga) =>
        manga.title.toLowerCase().includes(search.toLowerCase())
      )
  : [];

  return (
    <div>
      <div className="topanime-principale">
        <div className="topanime-container">
          <div className="topanime-header">
            <div className="search-container">
              <svg
                className="search-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                  fill="currentColor"
                />
              </svg>
              <input
                className="search-input"
                type="text"
                placeholder=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="top-anime-container">
            {filteredManga.map((manga, index) => (
              <div key={index} className="anime-card">
              <div className="card-img">
                  <img src={manga.images.jpg.image_url} alt={manga.title} />
                </div>
                <div className="topanime-content">
                  <div className="topanime-title">
                    <span className="title1"><strong>{manga.title}</strong></span>
                    <span className="title"><strong>Volumes : </strong>{manga.volumes}</span>
                    <span className="title"><strong>Scores : </strong>{manga.score}</span>
                    <span className="title"><strong>Authors : </strong>{manga.authors[0].name}</span>
                  </div>
                  <div className="topanime-bouton2">
                    <Link to={`/Detail2/${manga.mal_id}`} className="topanime-button-click2">Plus d'infos</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopManga;