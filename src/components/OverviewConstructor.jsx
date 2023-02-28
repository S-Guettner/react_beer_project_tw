import { Link } from "react-router-dom";

const OverviewConstructor = (props) => {
    const productId = props.id
    return ( 
        <article className="flex justify-center items-center w-96 mx-auto border-b-[.1rem] border-black">
            <img className="w-20 m-4" src={props.img} alt="Beer" />
            <div className="text-center m-4 w-64 border-">
                <h2 className="text-2xl mb-2">{props.name}</h2>
                <p className="text-[#ffca41] mb-1">{props.tagline}</p>
                <p className="mb-4">Created by: {(props.contributedBy).slice(0,10)}</p>
                <Link className="rounded-xl h-10 pt-2 w-20 inline-block bg-[#ffca41]" to={`/productdetails/${productId}`}>Details</Link>
            </div>
        </article>
     );
}
 
export default OverviewConstructor;