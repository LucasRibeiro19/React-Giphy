import './Gifs.css'
function SelectedGif({gif}) {

    return ( 
        <>
            <img className="selected"src={gif}/>
        </>
     );
}

export default SelectedGif;