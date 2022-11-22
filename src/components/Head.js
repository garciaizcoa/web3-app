import { Parallax } from "react-parallax";
import './Parallax.css';
import Rain from "../images/rain-1.jpg";
import Plant from "../images/rain-2.jpg";
import Thing from "../images/rain-3.jpg";



function Head() {
    return(
        <div className='Parallax'>
            <Parallax strenth={-600} bgImage={Thing}>
                <div className="content">
                    <div className="text-content">Rain Fall</div>
                </div>
            </Parallax>

            <Parallax strenth={-300} bgImage={Plant}>
                <div className="content">
                    <div className="text-content">Soil Saturation</div>
                </div>
            </Parallax>

            <Parallax strenth={-200} blur={{min:-5, max:5}}bgImage={Rain}>
                <div className="content">
                    <div className="text-content">Humidity and Pressure</div>
                </div>
            </Parallax>
            </div>
        );
};

export default Head;