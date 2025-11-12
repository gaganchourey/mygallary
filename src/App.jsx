import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );

    setUserData(response.data);
  };

  useEffect (function(){
    getdata()
  }, [index])

  let printUserData = <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -tracking-y-1/2">Getting your content....</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return (
        <div key={idx} >
          < Card  elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className=" h-screen overflow-auto w-full bg-black p-4 text-white flex  flex-col">
      
      {/* photos print krne ka liya niche bali line */}

      <div className="flex flex-wrap justify-center gap-4">{printUserData}</div>

      {/* button to load prev next */}

      <div className="flex justify-center items-center p-4 gap-6">
        <button 
        className="bg-amber-600 px-4 py-2 text-black rounded cursor-pointer active:scale-95"
        onClick={() =>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }}>
          Prev</button>
        <h4 className=" text-white">{index}</h4>
        <button 
        className="bg-amber-600 px-4 py-2 text-black rounded cursor-pointer active:scale-95"
        onClick={() =>{
          setIndex(index+1)
          setUserData([])
        }}>
          Next</button>
      </div>
    </div>
  );
};

export default App;
