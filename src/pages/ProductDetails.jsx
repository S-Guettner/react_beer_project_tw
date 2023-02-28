import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import DatailviewConstructor from "../components/DetailviewConstructor";

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
    console.log(producer)
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
        </section>
        
     );
}
 
export default ProductDetails;