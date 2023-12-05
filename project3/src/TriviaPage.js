import React from 'react';
import { useState, useEffect } from 'react';


export default function Trivia(){

    const [currentScore,updateScore]=useState(0);
    const[category,changeCategory]=useState();
    const[question, setQuestion] = useState();
    const[answer, setAnswer]=useState();
    const[userAnswer,setUserAnswer] = useState();
    const[message,updateMessage]=useState();
    
    function HandleClick(category){
       
    let options = {
    method: 'GET',
    headers: { 'X-Api-Key': '2Zy5oKzQec/6+/sQmRJbDw==qEMod1kazHRPkLjo'}
    }
  
    let url = 'https://api.api-ninjas.com/v1/trivia?category=' + category;
  
  

    
        fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
          console.log(data[0].question)
          setQuestion(data[0].question)
          setAnswer(data[0].answer)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
 

      
    }

    function EvaluateAnswer(e){
        console.log(e.target.value);
       setUserAnswer(e.target.value);
    }

    function HandleSubmit(){
        if(userAnswer==answer){
            console.log(userAnswer);
            updateScore(currentScore+1);
            updateMessage('Correct');
        }else{
            updateMessage('Not Correct! Correct answer was: '+ {answer});
        }
    }

    return(
    <div>
        <h1>Hello, Welcome to the Trivia Game</h1>
        <p>Score: {currentScore}</p>
        <p>Choose a Category:</p>
            <button onClick = {()=>HandleClick('general')}>General</button>
            <button onClick = {()=>HandleClick('music')}>Music</button>
            <button onClick = {()=>HandleClick('geography')}>Geography</button>
            <button onClick = {()=>HandleClick('sportsleisure')}>Sports and Leisure</button>
            <button onClick = {()=>HandleClick('historyholidays')}>History and Holidays</button>
            <div>
                <p>Question: {question}</p>
                
                    <label>
                        Answer:
                            <input type="text"  onChange = {(e)=>EvaluateAnswer(e)}/>
                    </label>
                    <button onClick={HandleSubmit}>Submit</button>


                <p>{message}</p>

            </div>
    </div>

    );
}

