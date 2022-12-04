import { Parallax } from "react-parallax";
import './Parallax.css';
import Rain from "../images/rain-1.jpg";
import Plant from "../images/rain-2.jpg";
import Thing from "../images/rain-3.jpg";
import disaster from "../images/disaster.avif";


function Head() {
    return(
        <div className='Parallax'>
            <Parallax strenth={-200} blur={{min:-5, max:5}}bgImage={disaster}>
                <div className="content">
                    <div className="text-content">Gather Temperature, Humidity and Pressure Data</div>
                </div>
            </Parallax>
            <Parallax strenth={-600} bgImage={Thing}>
                <div className="content">
                    <div className="text-content">Predict Rainfall and Alert Temperature Deviation</div>
                </div>
            </Parallax>

            <Parallax strenth={-300} bgImage={Plant}>
                <div className="content">
                    <div className="text-content">Log Soil Saturation and Crucial Disaster Data Securely with Climate Resiliency NFTs</div>
                </div>
            </Parallax>

            <Parallax strenth={-200} blur={{min:-5, max:5}}bgImage={Rain}>
                <div className="content">
                    <div className="text-content">Upload Sensor Data to Telos Blockchain and Compare with Uploaded Data Sets already On-Chain  </div>
                </div>
            </Parallax>
            </div>
        );
};

export default Head;