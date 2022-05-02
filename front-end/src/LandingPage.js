import './LandingPage.css';
import house_img from './icons8-home-200.png';
import berkeley from './berkeley.png'
const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${berkeley})`,
  backgroundSize: 'cover'
};

function LandingPage() {
    return (
      <div className="landing_page">
        <div class = "main" style = {divStyle}>
            <br></br>
            <br></br>
            <br></br>
            <a class="button" href='./Listings'>SEARCH FOR APARTMENTS</a>
        </div>
      </div>
    );
  }
  
export default LandingPage;