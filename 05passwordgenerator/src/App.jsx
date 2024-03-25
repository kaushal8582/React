import { useCallback, useState, useEffect, useRef } from 'react'


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // ref hook

  const passwordRef = useRef(null);

  //copy fkuncton

  function copyPasswordToClipboard(){
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password)
  }

// useCallback is for optimization purpuse without useCallback you can create project using useEffect ok.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      console.log(char);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },
    [length, numberAllowed, charAllowed, setPassword]);

    // without useCallback you can create with useEffect .

  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed,setPassword])



  


  return (
    <>
      <div className='w-full max-w-xl px-4 mx-auto shadow-md rounded-lg py-2 my-8 text-white  bg-gray-800'
      >
        <h1 className='text-center mb-4 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 text-black' 
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label > Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultValue={numberAllowed}
              id='numberInput'
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor="numberInput">Number Allowed</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultValue={charAllowed}
              id='numberInput'
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label htmlFor="numberInput">Character Allowed</label>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
