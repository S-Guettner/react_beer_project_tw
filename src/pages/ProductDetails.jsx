import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import DatailviewConstructor from "../components/DetailviewConstructor";
import HomeButton from "../components/Homebutton";
import { Link } from "react-router-dom";
import backLogo from "../assets/images/Back.png"

const ProductDetails = () => {
    
    const beerId = useParams().id

    const [productDetails,setProductDetails] = useState([])
    const [producer,setProducer] = useState("")


    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => response.json())
        .then(data => {
            setProductDetails(data)
            setProducer((data.contributed_by).slice(0,10))
        })
    },[])
    return ( 

        <section>
            <DatailviewConstructor 
            img = {productDetails.image_url}
            name = {productDetails.name}
            tagline = {productDetails.tagline}
            firstBrewed = {productDetails.first_brewed}
            attenuationLevel = {productDetails.attenuation_level}
            description = {productDetails.description}
            contributedBy = {producer}
            />
            <Link to="/productoverview"><img className="pl-20" src={backLogo} alt="Back" /></Link>
            <HomeButton />
        </section>
        
     );
}
 
export default ProductDetails;