import backLogo from "../assets/images/Back.png"
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'

const RandomBeer = () => {

    const [randomProduct, setRandomProduct] = useState("")

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => response.json())
        .then(data => {
            setRandomProduct(data)
        })
    })

    return ( 
        <main>
            <article>

            </article>
            <h1>Random Beer</h1>
            <Link to="/"><img src={backLogo} alt="" /></Link>
        </main>


     );
}
 
export default RandomBeer;