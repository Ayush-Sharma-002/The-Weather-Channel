import React, { useState } from "react";
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=777c39ac2c0ad26969d144fa448ececa`



    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
                
            })
           setLocation('')
        }

    }
//     function backgroundChange(weather) {
//   var imgs = document.getElementById("allbody");

//   imgs.style.backgroundImage = `url('./assets/sunset.jpg')`;

//   if (weather == 'Rain') {
//     imgs.style.backgroundImage = "url('./assets/rain.jpg')";
//   } else if (weather == 'Clouds') {
//     imgs.style.backgroundImage = "url('./assets/clouds.jpg')";
//   } else if (weather == 'Clear') {
//     imgs.style.backgroundImage = "url('./assets/Clear.jpg')";
//   } else {
//     imgs.style.backgroundImage = "url('./assets/sunset.jpg')";
//   }
// }


    return ( 
        
        < div className = "app" id="appContent" >
        

        <div className = "search" >

        <input 
        value = {location}
        onChange = { event => setLocation(event.target.value) }
        placeholder = "Enter location"
         onKeyPress = {searchLocation}
        type = "text"/>

        </div> 

         <div className="container">
        <div className="top">  
        <div className = "location">
        <p> {data.name }
        </p> 
        </div >
        <div className = "temp" >
        {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> :null}  
        </div >

        <div className = "description" >
        {data.weather? <p className='bold'>{data.weather[0].main}</p> : null}
  
        </div> 
        </div>

        {data.name!=undefined && 

<div className = "bottom">
        <div className = "feels">
        <p className = "bold" >
          {data.main ? <p className='bold'>{data.main.feels_like}°F</p> : null}
         </p>  
        <p> Feels Like </p>  
        </div>  
        <div className = "humidity">
        {data.main ? <p className='bold'>{data.main.humidity}%</p>:null}
         
        <p> Humidity </p>  
        </div>  
        <div className = "wind">
        {data.wind ? <p className='bold'>{data.wind.speed}MPH</p>:null}
       
        <p> Wind Speed </p> 
        </div>

        </div>

    }
        


        </div>  
        </div>
    );
}

export default App;