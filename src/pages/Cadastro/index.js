import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./style.css"
// import { Container } from './styles';

function Cadastro() {

  const [createdAt, setCreatedAt] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [job_area, setJobArea] = useState("");
  const [animal, setAnimal] = useState("");
  

  function PostCadastra() {

    fetch("https://608850faa6f4a3001742632f.mockapi.io/api/v1/user", {
      method: "POST",
      headers: {"Content-type":"application/json; charset=UTF-8"},
      body:JSON.stringify({
        "createdAt": createdAt,
        "name": name,
        "avatar": avatar,
        "lastname": lastname,
        "address": address,
        "phone_number": phone_number,
        "job_area": job_area,
        "email": email,
        "animal": animal        
      })
    })
  }

  return (
  <div className="externo-form-cadastro" >
      <NavLink to="/cadastro"></NavLink > 

      
       <form action="/cadastro" className="form-cadastro">

<label htmlFor="createdAt">Created At</label>
        <input className="input-form"
          id="createdAt"
          type="text"
          name="createdAt"
          value={createdAt}
          onChange={(event) => setCreatedAt(event.target.value)}
        />

        <label htmlFor="name">Nome</label>
        <input className="input-form"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

<label htmlFor="avatar">avatar</label>
        <input className="input-form"
          id="avatar"
          type="text"
          src={avatar}
          name="avatar"
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)}
        />

<label htmlFor="lastname">lastname</label>
        <input className="input-form"
          id="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />

        <label htmlFor="address">address</label>
        <input className="input-form"
          id="address"
          placeholder="address"
          type="text"
          name="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        <label htmlFor="phone_number">Phone</label>
        <input className="input-form"
          id="phone_number"
          type="text"
          name="phone_number"
          value={phone_number}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
{/*  */}



<label htmlFor="job_area">Job Area</label>
        <input className="input-form"
          id="job_area"
          type="text"
          name="job_area"
          value={job_area}
          onChange={(event) => setJobArea(event.target.value)}
        />

<label htmlFor="email">email</label>
        <input className="input-form"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

<label htmlFor="animal">Animal</label>
        <input className="input-form"
          id="animal"
          type="text"
          name="animal"
          value={animal}
          onChange={(event) => setAnimal(event.target.value)}
        />



  
  

{/*  */}


<button className="button-enviar-cadastro" onClick={()=> PostCadastra()}>Envia Cadastro</button>
      </form>
  </div>
  )
}

export default Cadastro;