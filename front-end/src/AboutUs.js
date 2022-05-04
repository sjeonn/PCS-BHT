import './AboutUs.css';
import pcs_img from "./logopcs.png";

function Resources() {
    return (
        <div class = "main">
            <img src = {pcs_img} />
            <h2> A Political Computer Science @ Berkeley Project </h2>
            <p> This project was created by PCS @ Berkeley, a student organization at UC Berkeley.
                Created by Sage Jeon, Abdul Karim, Ashvin Dhawan, Lucas Schaberg, Owen Long, Ritik Sinha, Arjun Gadiyar, Lilian Chang, Aneesh Durai, Rohil Bhinge, and Cyrus Choi. </p>
            
            <p id="pcs_link"> <a target = "_blank" href = "https://pcs.berkeley.edu/"> PCS Link </a> </p>
        </div>
    );
  }
  
export default Resources;