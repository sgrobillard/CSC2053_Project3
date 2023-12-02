import React from 'react';
import { useState, useEffect } from 'react';


export default function Trivia(){

    const [currentScore,updateScore]=useState(0);
    const[category,changeCategory]=useState();
    const[question, setQuestion] = useState();
    const[answer, setAnswer]=useState();
    
    function handleClick(category){
       
    let options = {
    method: 'GET',
    headers: { 'X-Api-Key': '2Zy5oKzQec/6+/sQmRJbDw==qEMod1kazHRPkLjo'}
    }
  
    let url = 'https://api.api-ninjas.com/v1/trivia?category=' + category;
  
  
    fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          setQuestion(data.question)
          setAnswer(data.answer)
        })
        .catch(err => {
            console.log(`error ${err}`)
        }); 
    }

    return(
    <div>
        <h1>Hello, Welcome to the Trivia Game</h1>
        <p>Choose a Category:</p>
            <button onClick = {handleClick('general')}>General</button>
            <button onClick = {handleClick('music')}>Music</button>
            <button onClick = {handleClick('geography')}>Geography</button>
            <button onClick = {handleClick('sportsleisure')}>Sports and Leisure</button>
            <button onClick = {handleClick('historyholidays')}>History and Holidays</button>
    </div>

    );
}

