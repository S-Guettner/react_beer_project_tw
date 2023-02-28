import { Link } from "react-router-dom";
import img from "../assets/images/allbeers.png"

const AllBeers = () => {
    return ( 
        <section>
            <Link to="/productoverview">
                <img src={img} alt="" />
                <p>All Beers</p>
            </Link>
            <p></p>
        </section>
     );
}
 
export default AllBeers;