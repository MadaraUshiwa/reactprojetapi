import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import './Detail2.css';

function Detail2() {

    const [manga, setManga] = useState([]);
    let { id } = useParams();

    // const buildDate = (date) => {
    //     if (date) {
    //       return date.day + "/" + date.month + "/" + date.year;
    //     }

    //     return "Unknown";
    // };
    
  
    useEffect(() => {
      fetch(`https://api.jikan.moe/v4/manga/${id}/full`)
        .then((res) => res.json())
        .then((data) => setManga(data.data))
        .catch((err) => console.log(err));
    }, [id]);

    if (!manga || manga.length === 0) {
        return <h1>Loading ...</h1>
    }
    
    return (
        <div className='detail-principale'>
            <div className='test'>
            <div className="detail-container">
                <div className="detail-header">
                    <div className="detail-title">
                        <h1>{manga.title ?? ""}</h1>
                        <h3>{manga.title_japanese ?? ""}</h3>
                    </div>
                    <div className='test2'>               
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        </span>                      
                        <span>
                            {manga.score ?? ""}
                        </span>
                    </div>
                </div>
                <div className="detail-content">
                    <div className="detail-synopsis">
                        <h2>Synopsis : </h2>
                        <p className="detail-ligne"></p>
                        <p>{manga.synopsis ?? ""}</p>
                        <p><strong>Authors : </strong><strong>{manga.authors[0].name ?? ""}</strong></p>
                        <p><strong>Genre(s) :</strong> {manga.genres.map((genre) => genre.name).join(', ')}</p>
                        <p><strong>Authors : </strong><strong>{manga.authors[0].name ?? ""}</strong></p>
                        <p><strong>Published :</strong> {manga.published.string ?? ""}</p>
                        

                    </div>
                </div>

            </div>

            <div className="detail-image">
                <img className='imgdetail2' src={manga.images?.jpg.image_url ?? ""} alt={manga.title ?? ""} />
            </div>
            </div>
        </div>
    );
}

export default Detail2;