
import React, {useState, useEffect} from ‘react’;
 function DigitalClock()
 {
 const [mytime, setTime] = useState(" ");
 const tick = () => {
 let d= new Date();
 let hours = d.getHours();
 let minutes = d.getMinutes();
 let seconds = d.getSeconds();
 let time = `${hours>12?hours-12:hours}:${minutes}:${seconds}`
 if (hours< 12)
 time = time+" AM"
 else
 time = time+" PM"
setTime(time);
 }

 useEffect(() => {

 const t = setInterval(tick,1000);
 return () => {
 clearTimeout(t);
 }
 }, [mytime])
 return (  
 <div>

    <h1>DigitalClock</h1>
 <h2>{mytime}</h2>

 </div>);

 }
 export default DigitalClock;
   

