import axios from "axios";
import react, { useEffect } from "react";
import { useState } from "react";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
    const [gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
    async function fetchData(){
        setLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
        const imageSource=data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
      }
      useEffect(()=>{
        fetchData();
      },[tag])
    return {gif,loading,fetchData};
}

export default useGif