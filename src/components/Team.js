import React from "react";
import "./Team.css";
import ricardo from "../images/ricardo.jpg";
import './Parallax.css';
import Nicolas from "../images/Nicolas.jpeg";
import jibaros from "../images/jibaros.png";
function Team() {
  return (
      <div className="team">
        <div className="team__container">
          <div className="team__row">
              <div className="team__card">
                <img
                  src={Nicolas}
                  alt="Nicolas"
                />
                <div className="team__container">
                  <h2>Nicolas Lopez</h2>
                  <p className="team__title">Data Scientist</p>
                  <p>Previously Scientific Programmer for NASA's GOES-16 weather satelite and other goverment laboratories like NOAA, DoE & Naval Research Lab. 
                     Has published two data journals on the subject of weather prediction. 
                     Founder of West Africa weather edutech company and BP Kanda weather.
                     Fun Fact: He was mentioned as expert reviewer of National Geographic's book called "Explore My World Weather" documentary.
                      </p><a href="https://books.google.com/books?id=_BU9DwAAQBAJ&pg=PT33&lpg=PT33&dq=national+geographic+explore+my+world+weather+nicolas+lopez&source=bl&ots=n9IY6H4w7E&sig=ACfU3U2LMOPXkCAXDGvEn2fIfCHCK9YscQ&hl=en&sa=X&ved=2ahUKEwim9tOd--z6AhVTlGoFHaFrAAMQ6AF6BAgjEAM#v=onepage&q=national%20geographic%20explore%20my%20world%20weather%20nicolas%20lopez&f=false">Read More</a>
                </div>
                </div>
                <div className="team__card">
                <img
                  src={ricardo}
                  alt="ricardo"
                 
                />
                <div className="team__container">
                  <h2>Ricardo Garcia</h2>
                  <p className="team__title">Web Developer</p>
                  <p>Senior at University of Puerto Rico Mayaguez Studying Software Engineering.
                    Previously worked as a security intern in MCS Healthcare Holdings. 
                    Has experience in web development and mobile development.
                    Interested in web development, cybersecurity, data science, and machine learning.
                    Fun Fact: He got accepted to work at VERIZON as a security intern for summer 2023.
                     </p><a href="https://www.linkedin.com/in/ricardo-a-garcia-izcoa-29b755217/">Read More</a>
                </div>
                </div>
                <div className="team__card">
                <img
                  src={jibaros}
                  alt="jibaros"
                  
                />
                <div className="team__container">
                  <h2>Armando Jibaros</h2>
                  <p className="team__title">Solidity Programmer</p>
                  <p>NFT collaborator, Solidity developer, and Web3 developer. 
                    Entrepreneur and NFT Ennthusiast with a vision of pushing the mass adoption of new technologies, such as blockchain and virtual reality in order to have a positive socio-economic impact on the island of Puerto Rico. 
                    Founder of Jibaros Limited Digital Non Fungible Token Collection with a community of 400+ members.
                  </p><a href="https://twitter.com/JibarosNFT">Read More</a>
                </div>
                </div>
                </div>
                </div>
                </div>
            


  );
}
export default Team;
