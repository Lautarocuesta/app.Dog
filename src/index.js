import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Register from "./register";
import Home from "./home";
import Contact from "./contact";
import Navbar from "./navbar";
import Dogcard from "./dogCard";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="description/:dogname" element={<Dogcard/>}/>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
