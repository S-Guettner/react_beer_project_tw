import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'

const HomeButton = () => {
    return ( 
        <Link className="flex justify-center p-2 h-14 bg-[#ffca41]" to={"/"}>
            <img src={logo} alt="" />
        </Link>
     );
}
 
export default HomeButton;