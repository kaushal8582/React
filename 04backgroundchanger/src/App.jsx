import { useState } from "react"


function App() {

  const [color , setColor] = useState("green");

  return (
    <>
     <div className="relative w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed bottom-28 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden px-3 ">
          <div className="px-3 py-2 bg-white flex gap-5 flex-wrap justify-center items-center rounded-full ">
            <button onClick={()=> setColor("red")} className=" px-3 py-1 rounded-full outline-none text-white" style={{backgroundColor:"red"}}>Red</button>
            <button  onClick={()=> setColor("green")}  className=" px-3 py-1 rounded-full outline-none text-white" style={{backgroundColor:"green"}}>Green</button>
            <button  onClick={()=> setColor("yellow")}  className=" px-3 py-1 rounded-full outline-none text-black" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button  onClick={()=> setColor("blue")}  className=" px-3 py-1 rounded-full outline-none text-white" style={{backgroundColor:"blue"}}>Blue</button>
            <button  onClick={()=> setColor("orange")}  className=" px-3 py-1 rounded-full outline-none text-white" style={{backgroundColor:"orange"}}>Orange</button>
            <button  onClick={()=> setColor("black")}  className=" px-3 py-1 rounded-full outline-none text-white" style={{backgroundColor:"black"}}>Black</button>
          </div>
        </div>
     </div>

    </>
  )
}

export default App
