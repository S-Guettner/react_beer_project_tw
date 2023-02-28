import { useEffect,useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import OverviewConstructor from "../components/OverviewConstructor";
import { Link } from "react-router-dom";
import HomeButton from "../components/Homebutton";

const ProductOverview = () => {
    
    const [products,setProducts] = useState([])
    
    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
    },[])
    
    return ( 
        <section>

        {products && products.map((product) => {
            console.log(product.contributed_by)
            return (
                <OverviewConstructor 
                key={uuidv4()}
                img={product.image_url}
                name={product.name}
                tagline={product.tagline}
                contributedBy={product.contributed_by}
                /* link to detailsite */
                />
            )
        })}
        <HomeButton />
        </section>
     );
}
 
export default ProductOverview;