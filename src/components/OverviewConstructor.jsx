import { Link } from "react-router-dom";

const OverviewConstructor = (props) => {
    const productId = props.id
    return ( 
        <article className="flex justify-center items-center p-3">
            <img className="w-20 m-4" src={props.img} alt="Beer" />
            <div className="text-center m-4 w-64">
                <h2>{props.name}</h2>
                <p>{props.tagline}</p>
                <p>Created by: {(props.contributedBy).slice(0,10)}</p>
                <Link className="h-10 w-20 inline-block bg-cyan-800" to={`/productdetails/${productId}`}>Details</Link>
            </div>
        </article>
     );
}
 
export default OverviewConstructor;