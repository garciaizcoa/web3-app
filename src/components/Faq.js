import React from "react";

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
                            <p>Visualizing real-time extreme weather phenomena by plotting against typical island climates from NOAA. 
                                By putting climate data directly on chain,
                                 we are providing full transparency into climate insurance contract with ability for FEMA 
                                 and other agencies to disperse short-term emergency funds immediately after extreme weather conditions take place. 
                                 Assessing hazards on the island by documenting more tangible climate outcomes around the island using NFT rewards system </p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="faq__container">
                <div className="faq__row">
                    <div className="faq__column">
                        <div className="faq__card">
                            <h2>How do I collaborate in Wet 3.0?</h2>
                            <p>Connect using “Climate Adaptation” NFT to real-time climate insurance rewards system
                                We built a robust image upload mechanism with storage of the climate picture files on to IPFS
                                You can display uploaded images directly within the Mapping tool
                                and utilize more helpful weather data sensors like wind anemometers, rain gauges, and soil moisture sensors to monitor real-time storms and flooding.
                            </p>
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
        </div>
    
    );

}

export default Faq;
