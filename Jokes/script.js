//when fetch it returns promise
const jokeEl = document.getElementById('joke');

const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke() { //have to add async if u use await in fucntion
    const config = {
            headers: {
                'Accept': 'application/json'
            },
    }
    const res = await fetch('https://icanhazdadjoke.com', config) //return promsie so we await on it
    const data = await res.json()
    jokeEl.innerHTML = data.joke;
}


/* diff way with .then
function generateJoke() {
    const config = {
            headers: {
                'Accept': 'application/json'
            },
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(response => response.json())
    .then((data) => 
    {
        jokeEl.innerHTML = data.joke
    })
}
*/

