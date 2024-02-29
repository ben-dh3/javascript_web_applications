import React, { useState, useEffect } from 'react';

const Joke = () => {
    const [joke, setJoke] = useState('');

    let headers = new Headers();
    headers.append('Origin','http://localhost:3000');

    useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    fetch(URL, {
        mode: 'cors',
        headers: headers,
        method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setJoke(data));
    },[]);

    return (
    <>
        <h2>Joke:</h2>
        <div className="joke">
        {joke.height}
        {joke.name}
        </div>
    </>
    );
};

export default Joke