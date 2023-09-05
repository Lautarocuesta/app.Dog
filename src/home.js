import "./App.css";
import axios from "axios";
import { useState } from "react";

function Home() {
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
    let min_height, max_height, max_weight, min_weight;
  
  
    //tamaño del perro (altura en pulgadas)
    switch(dogs.size){
      case 0: 
        min_height = 0;
        max_height = 20;
        break;
      case 1:
        min_height = 20;
        max_height = 40;
        break;
      case 2:
        //---
        break;
    }
    

    axios.get("https://api.api-ninjas.com/v1/dogs", {
      headers: {'X-Api-Key': 'PON TU APIKEY'},
      params: {
        //min_height: 35,
        //max_height: 70,
        //shedding: 5,
        //barking: 5,
        //energy: 5,
        //protectiveness: 5,
        trainability: 1,
        //price: $1
      }
    })
      .then((response) => setDogs(response.data))
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>home {"{good}"}</h1>
        <form className="dog-form" onSubmit={getDogs}>
          <label htmlFor="size">Tamaño: </label>
          <input type="range" max="5" id="size" name="size"
            onChange={handleChange}
            // required
          />
          <br />
          <label htmlFor="shedding">Cuanto pelo arroja la raza:</label>
          <input type="checkbox" id="shedding" name="shedding"
            // value={userData.lastName}
            onChange={handleChange}
            // required
          />
          <br />
          <label htmlFor="energy">Cuanta energia tiene la raza:</label>
          <input type="number" id="energy" name="energy"
            // value={userData.dni}
            onChange={handleChange}
            // required
          />
          <br />
          <label htmlFor="protectiveness">Que tan guardian es la raza:</label>
          <input type="number" id="protectiveness" name="protectiveness"
            // value={userData.birthday}
            onChange={handleChange}
            // required
          />
          <br />
          <label htmlFor="trainability">Que tan entrenable es la raza:</label>
          <input type="checkbox" id="trainability" name="trainability"
            // value={userData.email}
            onChange={handleChange}
            // required
          />
          <br />
          <button type="submit">Registrar</button>
        </form>
      </header>
      <div>
        <ul className="listDogs">
          {dogs.map((p) => <li><img src={p.image_link}/><p>{p.name}</p></li>)}
        </ul>
      </div>
    </div>
  );
}

export default Home;
