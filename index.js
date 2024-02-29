const URL = "https://official-joke-api.appspot.com/random_joke";

fetch(URL)
    .then((response) => response.json()) // Get JSON data out of Response object
    .then((todo) => {
    // Use the returned data in some way
    console.log(todo);
});

const body = document.querySelector("body");
const div = document.createElement("div");
const buttonEl = document.querySelector('#my-button');

buttonEl.addEventListener('click', () => {
    return fetch(URL)
    .then((response) => response.json()) 
    .then((todo) => {
        console.log(todo.setup)
        todo
        const content1 = document.createElement("p"); 
        content1.innerText = todo.setup; 
        div.appendChild(content1); 
        const content2 = document.createElement("p"); 
        content2.innerText = todo.punchline; 
        div.appendChild(content2); 
});
});

body.appendChild(div);