import './LandingPage.css';
import house_img from './icons8-home-200.png';
import { Slide } from 'react-slideshow-image';
import SimpleImageSlider from "react-simple-image-slider";
import berkeley from './berkeley.png';
import northside from './northsideslide.jpg';
import southside from './southsideslide.jpg';
import { withTheme } from '@material-ui/core';
const divStyle = {
  width: '100%',
  height: '800px',
  background:  'white',
  backgroundSize: 'cover'
};


const images = [
  { url: berkeley },
  { url: northside },
  { url: southside },
];

function LandingPage() {
    return (
      <div className="landing_page">
        <div class = "main" style = {divStyle}/*style = {Slideshow}*/>       
            <SimpleImageSlider
        width={1450}
        height={550}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />    
      <h2>Website for Berkeley Students to Navigate Housing Process!</h2>
      <a class="button" href='./Listings'>SEARCH FOR APARTMENTS</a>
            <br></br>
            <br></br>
        </div>
      </div>
    );
  }
  
export default LandingPage;