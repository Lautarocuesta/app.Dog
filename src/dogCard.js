import "./App.css";
import axios from "axios";
import { useState } from "react";

function Dogcard(props) {
  return (
    <div>
      <ul className="listDogs">
        {
        props.dogs.map((p) => <li>
          <img src={p.image_link}/><p>{p.name}</p>
        </li>
        )}
      </ul>
      
    </div>
  )

  
}

export default  Dogcard;
