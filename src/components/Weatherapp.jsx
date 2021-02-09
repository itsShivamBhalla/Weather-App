import React, { useState, useEffect} from 'react';
import "./css/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'

const Weatherapp =()=>{

    const [city,setCity]= useState();
    const [search,setSearch] = useState();
    useEffect(() => {
        const fetchApi = async ()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=84cbf3de60b58823e151ce92f0c91274`
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
        
    },[search] );


  
    return(
    <>
    <div className='box'>
    <div className="inputData">
        <input type="search" 
        value={search}
        className="inputFeild" placeholder="search city" onChange={(event)=>{
           setSearch(event.target.value);
        }}/>
    </div>
   {
       !city ? (<p className="errorMsg">No Data Found</p>) : ( <div>
       <div className="info">
        <h2 className="location">
        <FontAwesomeIcon icon={faStreetView}/>{search}</h2>
        <h1 className="temp">{city.temp}°Cel</h1>
        <h3 className="tempmin_max">Min-Temperature : {city.temp_min}°Cel <br/>   Max-Temperature : {city.temp_max}°Cel</h3>
        <h4 className="humidity">Humidity: {city.humidity}%</h4>
    </div>
    <div className="content">
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    <div className="wave -four"></div>
    </div>
        </div>
       )
   }
    </div>
   </>
    )
}

export default Weatherapp;