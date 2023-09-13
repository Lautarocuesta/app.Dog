import "./App.css";
import axios from "axios";
import { useState } from "react";
import Dogcard from "./dogCard";
import "./home.css"


function Home() {
  const [ignore, setIgnore] = useState({
    "ignore_energy": false,
    "ignore_protec": false,
    "ignore_train": false
  });
  const [dogs, setDogs] = useState([]);
  const [formData, setFormData] = useState({
    size: "",
    shedding: "noImporta",
    energy: 0,
    protectiveness: 0,
    trainability: 0
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const ocult = (event) => {
    setIgnore({ ...ignore, [event.target.name]: event.target.value });
  }

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
      headers: {'X-Api-Key': 'OvGYJdgkt/MnEjd5LZsqpQ==NYJvmG1NRqGTTWRl'},    //no nos baneen
      params: {
        min_height: min_height,
        max_height: max_height,
        //barking: 5,
        energy: dogs.energy,
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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Encuentra a tu perro ideal</h1><br />
        <form className="dog-form" onSubmit={getDogs}>
          <label htmlFor="size">Tamaño: </label>
          <select onChange={handleChange}>
              <option value="0">Pequeño</option>
              <option value="1">Mediano</option>
              <option value="2">Grande</option>
          </select>
          <br />
          <label htmlFor="shedding">Cuanto pelo arroja la raza:</label>

          <div className="radios">
            <input type="radio" value="importa" className="shedding" onChange={handleChange}/><label>Suelta poco pelo</label>
            <input type="radio" value="noImporta" className="shedding" onChange={handleChange}/><label>No me importa</label>
          </div>
          <br />

          <label htmlFor="energy">Cuanta energia tiene la raza:</label>
          <input type="checkbox" name="ignore_energy" onChange={ocult} />
          {!ignore.ignore_energy && <input type="range" max="5" min="1" id="energy" name="energy" onChange={handleChange}/>}
          <br />

          <label htmlFor="protectiveness">Que tan guardian es la raza:</label>
          <input type="checkbox" name="ignore_protec" onChange={ocult} />
          {!ignore.ignore_protec && <input type="range" max="5" min="1" id="protectiveness" name="protectiveness" onChange={handleChange}/>}
          <br />

          <label htmlFor="trainability">Que tan entrenable es la raza:</label>
          <input type="checkbox" name="ignore_train" onChange={ocult} />
          {!ignore.ignore_train && <input type="range" max="5" min="1" id="trainability" name="trainability" onChange={handleChange}/>}
          <br />

          <button type="submit">Buscar Perro</button>
        </form>
      </header>
          <Dogcard dogs={dogs}/>
    </div>
  );
}

export default Home;
