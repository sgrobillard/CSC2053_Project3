
export default function Trivia(){

    const [currentScore,updateScore]=useState(0);
    conts[category,changeCategory]=useState();

    function handleChange(text){
        updateScore(text);
    }
    return(
    <div>
    <h1>Hello, Welcome to the Trivia Game</h1>
    <label>
        Category:
        <input type='text' onChange={this.handleChange}/>
    </label>
    </div>

    );
}

var category = 'music';
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/trivia?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});