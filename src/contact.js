import React, { useEffect, useState } from "react";
//import "./contact.css";
import axios from "axios";

let onlyOne = 10;

function Contact() {
  const [dogs, setDogs] = useState([]);
useEffect(()=> {
  axios.get("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => {
        setDogs(response.data.message);
      })
      .catch((error) => console.error(`Error: ${error}`)); 
      onlyOne--;
    }, [])
  return (
    <div>
      {dogs.map((dog) => <img src={dog}></img>)}
    </div>
  );
    
}

export default Contact;
