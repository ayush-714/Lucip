import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles.css";

export default function Apply() {
  // To store current input entered
  const [inputText, setInputText] = useState({
    userName: "",
    userEmail: "",
    proposal: ""
  });

  // Handle text changed
  function textChanged(event) {
    var { name, value } = event.target;
    setInputText((prevVal) => {
      return {
        ...prevVal,
        [name]: value
      };
    });
  }

  // Adding new contact
  const publish = (e) => {
    e.preventDefault();
    console.log(inputText);
    // ProjectService.createContact(inputText).then((response) =>{
    //     ContactService.getAllContacts().then((response) => {
    //       setItems(response.data)
    //     })
    //     setInputText((prevVal) => {
    //       return {
    //         name: "",
    //         email: "",
    //         place: ""
    //       };
    //     });
    //     history.push('/contacts');
    // })
  };

  const { id } = useParams();
  const { name } = useParams();

  return (
    <div className="container">
      <div className="heading">
        <h1>Application form</h1>
      </div>
      <div className="form">
        Project Id:
        <input
          onChange={textChanged}
          name="id"
          type="text"
          placeholder="id"
          readonly="readonly"
          value={id}
        />
        <br/>
        Project Name:
        <input
          onChange={textChanged}
          name="projectName"
          type="text"
          placeholder="name"
          readonly="readonly"
          value={name}
        />
        <br/>
        User Email:
        <input
          onChange={textChanged}
          name="userEmail"
          type="text"
          placeholder="Enter your email"
          value={inputText.userEmail}
        />
        {/* User Name:
        <input
          onChange={textChanged}
          name="userName"
          type="text"
          placeholder="Enter your name"
          value={inputText.userName}
        /> */}
        <br/>
        Proposal:
        <input
          onChange={textChanged}
          name="proposal"
          type="text"
          placeholder="Enter your proposal"
          value={inputText.proposal}
        />
        <hr></hr>
        <br/>
        <button onClick={publish}>
          <span>Add</span>
        </button>
        <Link to="/projects" className="btn btn-success">
          Back
        </Link>
      </div>
    </div>
  );
}
