import backLogo from "../assets/images/Back.png"
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import RandomBeerConstructor from "../components/RandomBeerConstructor";
import HomeButton from "../components/Homebutton";

const RandomBeer = () => {

    const [randomProduct, setRandomProduct] = useState("")
    const [producer,setProducer] = useState("")

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => response.json())
        .then(data => {
            setRandomProduct(data)
            setProducer((data.contributed_by).slice(0,10))
        })
    },[])

    return ( 
        <main>
            <article>
                <RandomBeerConstructor 
                    img = {randomProduct.image_url}
                    name = {randomProduct.name}
                    tagline = {randomProduct.tagline}
                    firstBrewed = {randomProduct.first_brewed}
                    attenuationLevel = {randomProduct.attenuation_level}
                    description = {randomProduct.description}
                    contributedBy = {producer}
                />
            </article>
            <Link to="/"><img className="pl-20" src={backLogo} alt="" /></Link>
            <HomeButton />
        </main>


     );
}
 
export default RandomBeer;