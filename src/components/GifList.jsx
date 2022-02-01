import Gif from "./Gif";
import './Gifs.css'
function GifList({gifs, onClick}) {
    

    return ( 
        <div className="gif-container">
         {gifs.map(gif => <Gif key={gif.id} gif={gif} onClick={onClick}/>)}
        </div>
        
     );
}

export default GifList;