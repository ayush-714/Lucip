import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import Add from './add'
import Response from './response';
function Home(){
    const [curr, setCurr] = useState(0);
    async function Updateadd() {
        setCurr(1);
      }
      async function Updateres() {
        setCurr(2);
      }
      async function Updatecurr() {
        setCurr(3);
      }
    if(curr===0){
        return (
            <div>
                   <button onClick={Updateadd}>Add Project</button>
                   <button onClick={Updateres}>See Responses</button> 
                   <button onClick={Updatecurr}>Current Projects</button> 
            </div>
        )
    }
    if(curr===1){
        return (
            <div>
                   <button onClick={Updateadd}>Add Project</button>
                   <button onClick={Updateres}>See Responces</button> 
                   <button onClick={Updatecurr}>Current Projects</button>
                   <Add /> 
            </div>
        )
    }
    if(curr===2){
        return (
            <div>
                   <button onClick={Updateadd}>Add Project</button>
                   <button onClick={Updateres}>See Responces</button> 
                   <button onClick={Updatecurr}>Current Projects</button> 
                   <Response />
            </div>
        )
    }
    if(curr===3){
        return (
            <div>
                   <button onClick={Updateadd}>Add Project</button>
                   <button onClick={Updateres}>See Responces</button> 
                   <button onClick={Updatecurr}>Current Projects</button> 
            </div>
        )
    }
   
}

export default Home;