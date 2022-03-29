import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import Axios from "axios";
function Add() {
    const [name, setName] = useState();
    const [details, setDetails] = useState();
    const [projectOwner, setprojectOwner] = useState();
    const update = async () => {

        Axios.post("http://localhost:3002/api/teachers/newProject", {
            name: name,
            details:details,
            projectOwner: projectOwner
       
      }).then((response) => {
        
        console.log(response);
        
      });
    
    
      }
    
    
    return (
        <div>
            
                <center>
                    <lable>Name</lable>
                    <br/>
                    <input className="input" placeholder=" " type="Text"
                    onChange={(event) => {
                        setName(event.target.value);
                      }}></input>
                      <br />
                      <br />
                      <lable>Body</lable>
                      <br/>
                      <input className="input" placeholder=" " type="paragraph"
                    onChange={(event) => {
                        setDetails(event.target.value);
                      }}></input>
                       <br />
                       <br />
                       <lable>Author</lable>
                       <br/>
                      <input className="input" placeholder=" " type="Text"
                    onChange={(event) => {
                        setprojectOwner(event.target.value);
                      }}></input>
                    <br /> <br />

                    <button onClick={update}>Submit</button>
                </center>
           
        </div>
    )
}

export default Add;