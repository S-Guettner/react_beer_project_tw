import { Link } from "react-router-dom";
import img from "../assets/images/allbeers.png"

const AllBeers = () => {
    return ( 
        <section className="p-2">
            <Link to="/productoverview">
                <img className="mx-auto w-3/4" src={img} alt="" />
                <p className="bg-yellow-400 w-3/4 mx-auto">All Beers</p>
            </Link>
            
        </section>
     );
}
 
export default AllBeers;