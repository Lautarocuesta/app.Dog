import "./App.css";
import axios from "axios";
import { useState, useParams } from "react";

function Dogcard(props) {
  //let { dogname } = useParams();
  let data;

  /*axios.get("https://api.api-ninjas.com/v1/dogs?name="+dogname, 
      {headers: {'X-Api-Key': 'OvGYJdgkt/MnEjd5LZsqpQ==NYJvmG1NRqGTTWRl'}})
      .then((response) => data = response.data)
      .catch((error) => console.error(`Error: ${error}`));  */ 

  return (
    <div>
      <ul className="listDogs">
        {
        props.dogs.map((p) => <li>
          <img src={p.image_link}/><p>{p.name}</p>
          <img src="/energia.png" width="30" height="30" />
          <progress id="file" max="100" value={Number(p.energy)*20}></progress><br/>
          <img src="/entrena.png" width="30" height="30" />
          <progress id="file" max="100" value={Number(p.trainability)*20}></progress><br/>
          <img src="/escudo.png" width="30" height="30" />
          <progress id="file" max="100" value={Number(p.protectiveness)*20}>70%</progress><br/>
        </li>
        )}
      </ul>
      
    </div>
  )

  
}

export default  Dogcard;
