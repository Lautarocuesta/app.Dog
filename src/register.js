import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios"

function Register() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastName: "",
    dni: "",
    birthday: "",
    email: "",
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://my-json-server.typicode.com/fedevirgolini-
  itr/api_practico5/users`,
        userData
      )

      .then((response) => {
        if (response.status === 201) {
          window.alert("Usuario registrado");
        }
      })
      .catch((error) => window.alert("Error al registrar el usuario"));
  };
  return (
    <>
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          name="dni"
          value={userData.dni}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="birthdate">Fecha de nacimiento:</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          value={userData.birthday}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}

export default Register;
