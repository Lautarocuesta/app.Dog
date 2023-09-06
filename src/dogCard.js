import "./App.css";
import axios from "axios";
import { useState } from "react";

function Dogcard() {
  const [dogs, setDogs] = useState([]);
  const [formData, setFormData] = useState({
    size: "",
    shedding: false,
    energy: 0,
    protectiveness: 0,
    trainability: 0
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const getDogs = (event) => {
    event.preventDefault();

    //calcular datos a partir del formulario:
    let min_height, max_height;
  
  
    //tamaño del perro (altura en pulgadas)
    switch(formData.size){
      case 0: 
        min_height = 0;
        max_height = 10;
        break;
      case 1:
        min_height = 10;
        max_height = 20;
        break;
      case 2:
        min_height = 20;
        max_height = 35;
        break;

    }


    

    axios.get("https://api.api-ninjas.com/v1/dogs", {
      headers: {'X-Api-Key': 'OvGYJdgkt/MnEjd5LZsqpQ==NYJvmG1NRqGTTWRl'},
      params: {
        min_height: min_height,
        max_height: max_height,
        //barking: 5,
        energy: 4,
        //protectiveness: 5,
        //trainability: 5,
        //price: $1
      }
    })
      .then((response) => setDogs(response.data))
      .catch((error) => console.error(`Error: ${error}`));    
      
      
      if(formData.shedding == "importa"){
        setDogs(dogs.filter((e) => e.shedding < 3))
      } 
  };

  
}

export default  Dogcard;
