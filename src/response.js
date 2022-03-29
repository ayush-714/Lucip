import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import Axios from "axios";
// import Table from './table';
function Response(){
    const [found, setFound] = useState(0);
    const [row, setRow] = useState();
    var col=['Name','Description'];
    Axios.post("https://lnmiitlucidserver.herokuapp.com/api/teachers", {
      }).then((response) => {
            row=response.data;
      });
    if(found===0)
    return (
        <div>

        </div>
    )
    return(
        <div>
            {/* <Table list={row} colNames={col}/> */}
        </div>
    )
}
export default Response;