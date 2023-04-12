import axios from "axios";
import react, { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [form,setForm]=useState('');
  const[tag,setTag]=useState('');
  function changeHandler(event){
    setForm(event.target.value);
  }
  function clickhandler(){
    setTag(form);
    fetchData();
  }
  const {gif,loading,fetchData}=useGif(tag);
  return (
  <div className="w-1/2 flex flex-col items-center  bg-blue-400 border rounded-lg border-black ">
    <h1 className="text-2xl underline uppercase font-bold">A Random {tag} gif</h1>
    {
      loading?(<Spinner />):(<img src={gif} alt="" width={450}  />)
    }
    <input className="w-10/12 boarder rounded-md mb-[2px] text-lg text-center"
    onChange={changeHandler} value={form}/>
    <button onClick={clickhandler} className="w-9/12 rounded-lg bg-slate-200">Generate</button>
  </div>
  );
}
