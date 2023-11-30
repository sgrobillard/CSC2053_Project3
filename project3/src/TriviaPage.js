import React from 'react';
import { useState, useEffect } from 'react';


export default function Trivia(){

    const [currentScore,updateScore]=useState(0);
    const[category,changeCategory]=useState();
    
    changeCategory('music')
    function ajaxCall(){
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/trivia?category=' + category,
            headers: { 'X-Api-Key': '2Zy5oKzQec/6+/sQmRJbDw==qEMod1kazHRPkLjo'},
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
    return(
    <div>
        <h1>Hello, Welcome to the Trivia Game</h1>
        <p>Choose a Category:</p>
            <button onClick = {ajaxCall('general')}>General</button>
            <button onClick = {ajaxCall('music')}>Music</button>
            <button onClick = {ajaxCall('geography')}>Geography</button>
            <button onClick = {ajaxCall('sportsleisure')}>Sports and Leisure</button>
            <button onClick = {ajaxCall('historyholidays')}></button>
    </div>

    );
}

