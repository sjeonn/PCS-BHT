import './AboutUs.css';
import pcs_img from "./logopcs.png";

function Resources() {
    return (
        <div class = "main">
            <img src = {pcs_img} />
            <h2> A Political Computer Science @ Berkeley Project </h2>
            <p> This project was created under the student organization, PCS, at Berkeley.
                Created by Sage Jeon, Abdul Karim, Ashvin Dhawan, Lucas Schaberg, Owen Long, and Ritik Sinha. </p>
            <p id="pcs_link"> <a target = "_blank" href = "https://pcs.berkeley.edu/"> PCS Link </a> </p>
        </div>
    );
  }
  
export default Resources;