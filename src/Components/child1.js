import React from "react";


var currTime = new Date();
currTime = currTime.getHours();
var greeting = '';

if(currTime > 1 && currTime < 12){
    greeting = 'Good Morning !';
}
else if(currTime > 12 && currTime < 16){
    greeting = 'Good Afternoon !';
}
else if(currTime > 16 && currTime < 21){
    greeting = 'Good Evening !';
}
else if(currTime > 21 && currTime < 24){
     greeting = 'Good Night !';
}

const Greeting = () => {
    return(
        <>
           <h1>Hello Sir, {greeting}</h1>
        </>
    );
} 
export default Greeting;