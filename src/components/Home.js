/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import '../App.css'
import Commands from './Commands'

const Home = () => {
    const [command, setCommand] = useState()

 const traerDatos = () => {
    const contenido = document.getElementById("code").value;
    setCommand(contenido)
}

  return (
    <>
    <div className="App">
     <p>
    <h5 className='version'> Portfolio [Version 0.1.2022] </h5> 
    <h5 className='version1'> (c) Camilo Buritica. All rights reserved. </h5>
    < h5 className='comment'>::Type help</h5>
    <div>
    <span class="prefix"> C:\Users\visitor{'>'} </span>
    <input onClick={() => traerDatos()} className='code' type='text' id='code' autoFocus />
    </div>
    {command === 'help' && <Commands />}
     </p>
    </div>
    </>
  );
}

export default Home