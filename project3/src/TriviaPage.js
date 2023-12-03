import React from 'react';
import { useState, useEffect } from 'react';


export default function Trivia(){

    const [currentScore,updateScore]=useState(0);
    const[category,changeCategory]=useState();
    const[question, setQuestion] = useState();
    const[answer, setAnswer]=useState();
    
    function HandleClick(category){
       
    let options = {
    method: 'GET',
    headers: { 'X-Api-Key': '2Zy5oKzQec/6+/sQmRJbDw==qEMod1kazHRPkLjo'}
    }
  
    let url = 'https://api.api-ninjas.com/v1/trivia?category=' + category;
  
  

    useEffect( () => {   
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
    });

        return (
            <div>
                <p>Question: {question}</p>
                <form>
                    <label>
                        Answer:
                            <input type="text" value = {answer} onChange = {(e) => setAnswer(e.target.value)} />
                    </label>
                </form>
            </div>
        );
    }

    return(
    <div>
        <h1>Hello, Welcome to the Trivia Game</h1>
        <p>Choose a Category:</p>
            <button onClick = {HandleClick('general')}>General</button>
            <button onClick = {HandleClick('music')}>Music</button>
            <button onClick = {HandleClick('geography')}>Geography</button>
            <button onClick = {HandleClick('sportsleisure')}>Sports and Leisure</button>
            <button onClick = {HandleClick('historyholidays')}>History and Holidays</button>
    </div>

    );
}

