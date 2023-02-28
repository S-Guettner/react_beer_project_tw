import { Link } from "react-router-dom";
import logoButton from '../assets/images/Logo.png'

const HomeButton = () => {
    return ( 
        <Link className="mt-20 flex justify-center p-2 h-14 bg-[#ffca41]" to={"/"}>
            <img src={logoButton} alt="" />
        </Link>
     );
}
 
export default HomeButton;