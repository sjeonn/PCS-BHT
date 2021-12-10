import './LandingPage.css';
import house_img from './icons8-home-200.png';

function LandingPage() {
    return (
      <div className="landing_page">
        <div class = "main">
            <h1>Look for Apartments in Berkeley with Berkeley Housing Tool</h1>
            <h2> A PCS Project </h2>
            <img class = "house-image" src = {house_img} />
            <h3> Start searching now...</h3>
            <a href='./listings'>View Listings</a>
        </div>
      </div>
    );
  }
  
export default LandingPage;