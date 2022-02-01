import './Gifs.css';
function Gif ({gif : {images},onClick}) {

const {url} = images.downsized;

    return ( 
        <>
            <img src={url} onClick={onClick}/>
        </>
     );
}

export default Gif;