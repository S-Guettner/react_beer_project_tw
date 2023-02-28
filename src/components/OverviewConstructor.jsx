const OverviewConstructor = (props) => {
    return ( 
        <article className="flex justify-center items-center p-3">
            <img className="w-20 m-4" src={props.img} alt="Beer" />
            <div className="text-center m-4 w-64">
                <h2>{props.name}</h2>
                <p>{props.tagline}</p>
                <p>Created by: {(props.contributedBy).slice(0,10)}</p>
            </div>
        </article>
     );
}
 
export default OverviewConstructor;