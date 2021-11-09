import Card from "./Card";
import './Listings.css';

function Listings(props) {
    return (
      <div className="listings">
        {props.listings.map((listing) =>
          <ul key={listing.id}>
            <Card listing={listing}/>
          </ul>
        )}
      </div>
    );
  }
  
  export default Listings;
  