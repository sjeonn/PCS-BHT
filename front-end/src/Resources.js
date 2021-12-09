import './Resources.css';

function Resources() {
    return (
        <div class = "main">
            <h1>Housing Resources</h1>
            <ul>
                <li class = "section"> <u>Berkeley Housing</u>
                    <ul>
                        <li> <a href = "https://housing.berkeley.edu/compare"> Options </a> </li>
                        <li> <a href = "https://housing.berkeley.edu/rates"> Rates </a> </li>
                        <li> <a href = "https://portal.housing.berkeley.edu/StarRezPortalx/DBA27648/1/1/Home-Home"> Application </a> </li>
                        <li> <a href = "https://sls.berkeley.edu/"> Student Legal Services </a> </li>
                    </ul>
                </li>
                <li class = "section"> <u>Associated Housing</u>
                    <ul>
                        <li> <a href = "https://bsc.coop/"> Co-Ops </a> </li>
                        <li> <a href = "https://ihouse.berkeley.edu/resident-life/apply-live-here"> I-House </a> </li>
                        <li> <a href = "https://www.bowleshall.org/"> Bowles Hall </a> </li>
                    </ul>    
                </li>
                <li class = "section"> <u>Berkeley City Housing Policies</u>
                    <ul>
                        <li> <a href = "https://www.cityofberkeley.info/ContentDisplay.aspx?id=15580"> Health, Housing & Community Services Department </a> </li>
                        <li> <a href = "https://www.cityofberkeley.info/BHA/Home/Policies_and_Plans.aspx"> Berkeley Housing Authority </a> </li>
                        <li> <a href = "https://www.cityofberkeley.info/BHA/Home/Payment_Standards,_Income_Limits,_and_Utility_Allowance.aspx"> Payment Standards </a> </li>
                        <li> <a href = "https://www.cityofberkeley.info/RentBoardUnitSearch.aspx"> Rent Ceiling </a> </li>
                    </ul>    
                </li>                
                <li class = "section"> <u>Covid-19 Rent Relief Info</u>
                    <ul>
                        <li> <a href = "https://www.ac-housingsecure.org/"> Alameda County </a> </li>
                        <li> <a href = "https://www.oaklandca.gov/resources/housing-resources-erap-emergency-rental-assistance"> Oakland </a> </li>
                        <li> <a href = "https://housing.ca.gov/covid_rr/program_overview.html#renter"> California </a> </li>
                    </ul>    
                </li>
            </ul>
        </div>
    );
  }
  
export default Resources;