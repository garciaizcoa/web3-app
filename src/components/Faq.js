import React from "react";
import { Parallax } from "react-parallax";
import "./Faq.css";

function Faq (){
    return(
        <div className="faq">
            <h1>FAQ</h1>
            <div className="faq__container">
                <div className="faq__row">
                    <div className="faq__column">
                        <div className="faq__card">
                            <h2>What is Wet 3.0?</h2>
                            <p>Wet 3.0 is a weather forecasting app that uses data from an open source blockchain to predict the weather! </p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="faq__container">
                <div className="faq__row">
                    <div className="faq__column">
                        <div className="faq__card">
                            <h2>Who is Wet 3.0?</h2>
                            <p>These are team members!</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="faq__container">
                <div className="faq__row">
                    <div className="faq__column">
                        <div className="faq__card">
                            <h2>Where is Wet 3.0?</h2>
                            <p>Anywhere in the world!</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    
    );

}

export default Faq;
