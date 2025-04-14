import React from 'react'
import './Project.css'
import {motion} from 'framer-motion'
import Logo from '../assets/25231.png';
import { FaLink } from "react-icons/fa";
const Project = () => {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    });
  });
  const hiddenEl = document.querySelectorAll('.hidden');
  hiddenEl.forEach((el)=>observer.observe(el));
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div className="box hidden">
        <div className="card" style={{backgroundColor:'rgb(212, 204, 204)'}} >
            <h4>Currency Converter</h4>
            <p>Currency converter website that converts one currency’s value into the relative values of other currencies.</p>
            <p>HTML,CSS,JavaScript</p>
            <a href="https://meetarora10.github.io/convert-currency/"><FaLink style={{fontSize:'45px',marginTop:'15px',marginRight:'158px'}}/></a>
            <a href="https://github.com/meetarora10/convert-currency"><img src={Logo} alt="" srcset="" /></a>
        </div>
        <div className="card">
          <h4>Weather App</h4>
          <p>Uses openweathermap api to dynamically display the temperature,humidity ,wind speed and also weather condition image of a
          city entered by user.</p>
          <p>React</p>
          <a href="https://weather-app-xt6i.vercel.app/"><FaLink style={{fontSize:'45px',marginTop:'15px',marginRight:'158px'}}/></a>
          <a href="https://github.com/meetarora10/Weather_App"><img src={Logo} alt="" srcset="" /></a>
        </div>
        <div className="card" style={{backgroundColor:'rgb(212, 204, 204)'}}>
          <h4>Zwigato</h4>
          <p>Frontend layout of a food aggregator company with add to cart and remove cart items functionality.
          Customers can also view the items added in the cart.</p>
          <p>React,Redux</p>
          <a href="https://zwigato-react.vercel.app/"><FaLink style={{fontSize:'45px',marginTop:'15px',marginRight:'158px'}}/></a>
          <a href="https://github.com/meetarora10/Zwigato-react"><img src={Logo} alt="" srcset="" /></a>
        </div>
      </div>
      <a href="https://github.com/meetarora10"><button className="view">More Projects</button></a>
    </div>
  )
}

export default Project
