import {React, useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import './Detail.css';

function Detail() {

    const [anime, setAnime] = useState([]);
    let { id } = useParams();

    // const buildDate = (date) => {
    //     if (date) {
    //       return date.day + "/" + date.month + "/" + date.year;
    //     }

    //     return "Unknown";
    // };
    
  
    useEffect(() => {
      fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
        .then((res) => res.json())
        .then((data) => setAnime(data.data))
        .catch((err) => console.log(err));
    }, [id]);

    // console.log(anime.studios[0].name);
    if (!anime || anime.length === 0) {
        return <h1>Loading ...</h1>
    }
    
    return (
        <div className='detail-principale'>
            <div className='test'>
            <div className="detail-container">
                <div className="detail-header">
                    <div className="detail-title">
                        <h1>{anime.title ?? ""}</h1>
                        <h3>{anime.title_japanese ?? ""}</h3>
                    </div>
                    <div className='test2'>               
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                        </span>                      
                        <span>
                            {anime.score ?? ""}
                        </span>
                    </div>
                </div>
                <div className="detail-content">
                    <div className="detail-synopsis">
                        <h2>Synopsis : </h2>
                        <p className="detail-ligne"></p>
                        <p>{anime.synopsis ?? ""}</p>
                        <p><strong>Studio : </strong><strong>{anime.studios[0].name ?? ""}</strong></p>
                        <p><strong>Genre(s) :</strong> {anime.genres.map((genre) => genre.name).join(', ')}</p>
                    </div>
                    <div className="detail-info">
                        <h2>Opening :</h2>
                        <p className="detail-ligne"></p>
                        <div className='detail-ost'>
                            <p>{anime.theme.openings.map((opening, index) => <p key={index}>{opening}</p>)}</p>
                        </div>    
                        <h2>Ending :</h2>
                        <p className="detail-ligne"></p>
                        <div className='detail-ost'>
                            <p>{anime.theme.endings.map((ending, index) => <p key={index}>{ending}</p>)}</p>
                        </div>   

                    </div>
                    <div className='detail-video'>
                        {anime.trailer.embed_url === null ? <h3>No Trailer</h3> : <iframe id='trailer' src={anime.trailer.embed_url} title={anime.title} allowFullScreen></iframe>}
                    </div>
                </div>

            </div>

            <div className="detail-image">
                <img className='imgdetail1' src={anime.images?.jpg.image_url ?? ""} alt={anime.title ?? ""} />
            </div>
            </div>
        </div>
    );
}

export default Detail;