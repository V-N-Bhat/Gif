import axios from "axios";
import react, { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {
  const {gif,loading,fetchData}=useGif();
  function clickhandler(){
    fetchData();
  }
  return (
  <div className="w-1/2 flex flex-col items-center  bg-green-400 border rounded-lg border-black ">
    <h1 className="text-2xl underline uppercase font-bold">A Random gif</h1>
    {
      loading?(<Spinner />):(<img src={gif} alt="" width={450}  />)
    }
    <button onClick={clickhandler} className="w-9/12 rounded-lg bg-slate-200">Generate</button>
  </div>
  );
}
