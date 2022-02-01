import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import GifList from './GifList';
import SelectedGif from './SelectedGif';
import Header from './Header';
import axios from "axios";


function App() {
    const [gifs, setGifs] = useState([]);
    const [gif, setGif] = useState([""]);

    const handleClick = (e) => {
        setGif(e.target.src);
    }

    useEffect(() => {

        const endpoint = `http://api.giphy.com/v1/gifs/search?api_key=qAXQ8kiTVISiRcMGw1kX479giPfIdHyb&q=cat&limit=5`;
        const fetchGifs = async () => {
            const {data :{data}} = await axios.get(endpoint);
    

            setGifs(data);
        }

        fetchGifs();

    },[]);


  return (
    <>
        <Header title="Giphy App"/>
        <div className="main">
            <SelectedGif gif={gif}/>
            <GifList gifs={gifs} onClick={handleClick}/>
        </div>
    </>
  )
}

export default App;