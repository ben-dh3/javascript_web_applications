import React, { useState, useEffect } from 'react';

const Joke = () => {
    const [joke, setJoke] = useState('');

    let headers = new Headers();
    headers.append('Origin','http://localhost:3000');

    useEffect(() => {
    const URL = `https://official-joke-api.appspot.com/random_joke`;
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
        {joke.setup}
        {joke.punchline}
        </div>
    </>
    );
};

export default Joke