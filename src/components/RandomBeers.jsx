import { Link } from "react-router-dom";
import img from "../assets/images/randombeer.png"

const RandomBeers = () => {
    return ( 
                <section>
            <Link to="/randombeer">
                <img src={img} alt="" />
                <p>Random Beer</p>
            </Link>
            <p></p>
        </section>
     );
}
 
export default RandomBeers;