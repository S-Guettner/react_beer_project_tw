const RandomBeerConstructor = (props) => {
    return ( 
        <article className="p-4 text-center">
            <img className="w-40 mx-auto mb-10" src={props.img} alt="Beer" />
            <h2 className="text-2xl mb-4">{props.name}</h2>
            <p className="text-[#ffca41] mb-2">{props.tagline}</p>
            <div className="flex justify-between w-52 mx-auto">
                <p>First Brewed: </p>
            <p>{props.firstBrewed}</p>
            </div>
            <div className="flex justify-between w-52 mx-auto mb-4">
            <p>Attenuation level:</p>
            <p>{props.attenuationLevel}</p>
            </div>
            <p className="w-2/3 mx-auto">{props.description}</p>
            <p className="mb-10">{props.contributedBy}</p>
        </article>
     );
}
 
export default RandomBeerConstructor;