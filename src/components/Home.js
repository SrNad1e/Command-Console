/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import '../App.css'
import Commands from './Commands'

const Home = () => {
    const [command, setCommand] = useState()

 const traerDatos = () => {
    const contenido = document.getElementById("code").value;
    setCommand(contenido)
}

const onPressEnter = () => {
const el = document.getElementById("code");
el.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    traerDatos()
  }
});
}

useEffect(() => {
  console.log(command);
},[command])

  return (
    <>
    <div className="App">
     <p>
    <h5 className='version'> Portfolio [Version 0.1.2022] </h5> 
    <h5 className='version1'> (c) Camilo Buritica. All rights reserved. </h5>
    < h5 className='comment'>::Type help</h5>
    <div>
    <span class="prefix"> C:\Users\visitor{'>'} </span>
    <input onClick = {
      () => onPressEnter()
    }
    className = 'code'
    type = 'text'
    id = 'code'
    autoComplete='off'
    />
    </div>
    {command === 'help' ? <Commands /> :  (command === '' || command !== undefined) && <span className='comment'>No se reconoce el comando</span>}
     </p>
    </div>
    </>
  );
}

export default Home