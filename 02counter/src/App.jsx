import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(12)

  const addValue = ()=>{
    counter = counter+1 
    if(counter<=20){
      // setCounter(counter) // agar es prakar se code likhte hai to vo bunch me jake value ko change karta hai jisse ek hi value update hota hai
      // setCounter(counter)
      setCounter((prevCounter)=>prevCounter+1)  // aur es prakar se vo prev value ko leke update karta hai.
      setCounter((prevCounter)=>prevCounter+1)
    }
  }
  const removeValue = ()=>{
    if(counter>=1){
      setCounter(counter- 1);
      console.log("developer kaushal");
      
    }
  }

  return (
    <>
     
      <h1>developer kaushal</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue} >Remove Value {counter}</button>
    </>
  )
}

export default App
