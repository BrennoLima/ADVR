import React from 'react';
import './trailer.css'
import ReactPlayer from 'react-player'

const Trailer = () => {
    return(
        <div className="container-fluid trailer-container">
            <h1 id="trailer-title" className="trailer-title">Check out where you could be now!</h1>
            <div className="container video-container">
                <div className="row justify-content-center">
                    <ReactPlayer url='https://www.youtube.com/watch?v=EYXVRBaYiaM' controls/>
                </div>
            </div>
            
        </div>
    );
}

export default Trailer;