import { Link } from "react-router-dom";
import img from "../assets/images/randombeer.png"

const RandomBeers = () => {
    return ( 
                <section className="p-2">
            <Link to="/randombeer">
                <img className="mx-auto w-3/4" src={img} alt="" />
                <p className="bg-yellow-400 w-3/4 mx-auto ">Random Beer</p>
            </Link>
            
        </section>
     );
}
 
export default RandomBeers;