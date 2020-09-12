import React from 'react';
import BackgroundGiff2 from '../../assets/videos/Adventure6.gif'
import './promo.css'

const Promo = () => {
    return(
        <>
            <div className="promo-background-container">
                <div className="gradient"/>
                <img src={BackgroundGiff2} alt="Background giff" className="backgroundVideo2"/>
            </div>
            <div className="container-fluid promo-container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="promo-title">There's no time to lose.</h1>
                    </div>
                    <div className="col-12 col-md-5 offset-md-2">
                        <h1 className="promo-subtitle">Start planning your next adventure today!</h1>
                        <h1 className="promo-subtitle2">Sign In now and check our amazing packages</h1>
                    </div>
                    <div className="col-12 col-md-4">

                    </div>
                    
                </div>
            </div>
        </>
        
    );
}
export default Promo;