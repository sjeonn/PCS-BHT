import './AboutUs.css';
import pcs_img from "./logopcs.png";

function Resources() {
    return (
        <div class = "main">
            <img src = {pcs_img} />
            <h2> A Political Computer Science @ Berkeley Project </h2>
            <p> Created by Sage Jeon, Abdul Karim, Ashvin Dhawan, Lucas Schaberg, Owen Long, Ritik Sinha, </p>
            <p>Rohil Bhinge, Lilian Chang, Aneesh Durai, Arjun Gadiyar, and Soochang Choi.</p>
            <br></br>
            <p> Political Computer Science at Berkeley provides students with a space to tap into both of these backgrounds.  </p>
            <p>We are a community of students interested in computer and political science and more specifically, the intersection of these two important fields. </p>
            <p id="pcs_link"> <a target = "_blank" href = "https://pcs.berkeley.edu/"> LEARN MORE </a> </p>
        </div>
    );
  }
  
export default Resources;