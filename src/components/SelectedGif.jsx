import './Gifs.css'
function SelectedGif({gif}) {

    return ( 
        <>
            {gif ? <img className="selected"src={gif}/>: <></>}
            {/* <img className="selected"src={gif}/> */}
        </>
     );
}

export default SelectedGif;