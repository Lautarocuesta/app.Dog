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
    size: "0",
    shedding: "noImporta",
    energy: "5",
    protectiveness: "5",
    trainability: "5"
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const ocult = (event) => {
    setIgnore({ ...ignore, [event.target.name]: !ignore[event.target.name]});
  }

  const getDogs = (event) => {
    event.preventDefault();

    //calcular datos a partir del formulario:
    let minHeight, maxHeight;
  
  
    //tamaño del perro (altura en pulgadas)
    switch(formData.size){
      case "0": 
        minHeight = 0;
        maxHeight = 10;
        break;
      case "1":
        minHeight = 10;
        maxHeight = 20;
        break;
      case "2":
        minHeight = 20;
        maxHeight = 35;
        break;
    }


    axios.get("https://api.api-ninjas.com/v1/dogs", {
      headers: {'X-Api-Key': 'OvGYJdgkt/MnEjd5LZsqpQ==NYJvmG1NRqGTTWRl'},    //no nos baneen
      params: {
        min_height: minHeight,
        max_height: maxHeight,
        //barking: 5,
        energy: ignore.ignore_energy ? undefined:formData.energy,
        protectiveness: ignore.ignore_protec ? undefined:formData.protectiveness,
        trainability: ignore.ignore_train ? undefined:formData.trainability
        //price: $1
      }
    })
      .then((response) => setDogs(response.data))
      .catch((error) => console.error(`Error: ${error}`));    


      if(formData.shedding == "importa"){
        setDogs(dogs.filter((e) => e.shedding == 3))
      } 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Encuentra a tu perro ideal</h1><br />
        <img src="perro1.png" />
        <form className="dog-form" onSubmit={getDogs}>
          <label htmlFor="size">Tamaño: </label>
          <select name="size" className="size" onChange={handleChange}>
              <option value="0">Pequeño</option>
              <option value="1">Mediano</option>
              <option value="2">Grande</option>
          </select><br />

          <label htmlFor="shedding">Cuanto pelo arroja la raza:</label>
          <div className="radios">
            <input type="radio" name="shedding" value="importa" className="shedding" onChange={handleChange}/><label>Suelta poco pelo</label>
            <input type="radio" name="shedding" value="noImporta" className="shedding" onChange={handleChange} checked/><label>No me importa</label>
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
          <img src="perro2.png" width="300" height="300" />
        </form>
      </header>
          <Dogcard dogs={dogs}/>
    </div>
  );
}

export default Home;
