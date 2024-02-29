import React, { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhoneNumber] = useState();

    const handleChangeUsername = (event) => {
    const inputEl = event.target;
    setUsername(inputEl.value);
    };

    const handleChangePassword = (event) => {
    const inputEl = event.target;
    setPassword(inputEl.value);
    };

    const handleChangePhoneNumber = (event) => {
    const inputEl = event.target;
    setPhoneNumber(inputEl.value);
    };

    const handleSubmit = (event) => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        headers.append('Origin','http://localhost:3000');

        event.preventDefault();
    
        fetch("http://url.com/endpoint", {
            mode: 'cors',
            headers: headers,
            method: "POST",
            body: JSON.stringify({ username: username, password: password, phonenumber: phonenumber }),
            });
    };

    return (
    <form onSubmit={handleSubmit}>
        <label>
        Enter your username:
        <input
            type="username"
            name="username"
            value={username}
            required
            onChange={handleChangeUsername}
        />
        </label>
        <label>
        Enter your password:
        <input
            type="password"
            name="password"
            value={password}
            minlength="8" 
            required
            secureTextEntry
            onChange={handleChangePassword}
        />

        </label>
        <label>
        Enter your phone number:
        <input
            type="number"
            name="phonenumber"
            value={phonenumber}
            onChange={handleChangePhoneNumber}
            required
        />
        </label>
        <label>
        Submit
        <input type="submit" name="submit" />
        </label>
    </form>
    );
};

export default Form