const RandomBeerConstructor = (props) => {
    return ( 
        <article>
            <img className="w-40" src={props.img} alt="Beer" />
            <h2>{props.name}</h2>
            <p>{props.tagline}</p>
            <p>{props.firstBrewed}</p>
            <p>{props.attenuationLevel}</p>
            <p>{props.description}</p>
            <p>{props.contributedBy}</p>
        </article>
     );
}
 
export default RandomBeerConstructor;