import React from 'react';
import './Detail.css';

function Detail(props) {
    
    return (
        <div className='detail-principale'>
            <div className="detail-container">
                <div className="detail-header">
                    <div className="detail-title">
                        <h1>{props.location.state.title}</h1>
                    </div>
                    <div className="detail-image">
                        <img src={props.location.state.image_url} alt={props.location.state.title} />
                    </div>
                </div>
                <div className="detail-content">
                    <div className="detail-synopsis">
                        <h2>Synopsis</h2>
                        <p>{props.location.state.synopsis}</p>
                    </div>
                    <div className="detail-info">
                        <h2>Informations</h2>
                        <p><span>Type:</span> {props.location.state.type}</p>
                        <p><span>Episodes:</span> {props.location.state.episodes}</p>
                        <p><span>Score:</span> {props.location.state.score}</p>
                        <p><span>Start Date:</span> {props.location.state.start_date}</p>
                        <p><span>End Date:</span> {props.location.state.end_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;