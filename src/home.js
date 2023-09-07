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

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Encuentra a tu perro ideal</h1><br />
        <form className="dog-form" onSubmit={getDogs}>
          <label htmlFor="size">Tamaño: </label>
          <input type="range" max="2" id="size" name="size" onChange={handleChange}/>
          <br />
          <label htmlFor="shedding">Cuanto pelo arroja la raza:</label>
          
          <input type="radio" value="importa" id="shedding1" name="shedding" onChange={handleChange}/><label>suelta poco pelo</label>
          <input type="radio" value="noImporta" id="shedding2" name="shedding" onChange={handleChange}/><label>no me importa</label>
          <br />

          <input type="checkbox" value="ignorar" name="ignorar" onChange={handleChange} />
          <label htmlFor="energy">Cuanta energia tiene la raza:</label>
          <input type="range" max="5" min="1" id="energy" name="energy" onChange={handleChange}/>
          <br />

          <input type="checkbox" value="ignorar" name="ignorar" onChange={handleChange} />
          <label htmlFor="protectiveness">Que tan guardian es la raza:</label><br />
          <input type="range" max="5" min="1" id="protectiveness" name="protectiveness" onChange={handleChange}/>
          <br />

          <input type="checkbox" value="ignorar" name="ignorar" onChange={handleChange} />
          <label htmlFor="trainability">Que tan entrenable es la raza:</label>
          <input type="range" max="5" min="1" id="trainability" name="trainability" onChange={handleChange}/>
          <br />

          <button type="submit">Buscar Perro</button>
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
