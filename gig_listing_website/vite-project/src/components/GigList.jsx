import "../Gig.css";
import React, { useState, useEffect } from 'react';

const GigList = () => {
    const [gigs, setGigs] = useState([])

    let headers = new Headers();
    headers.append('Origin','http://localhost:3000');

    useEffect(() => {
    const URL = `https://makers-gig-backend.onrender.com/events`;
    fetch(URL, {
        mode: 'cors',
        headers: headers,
        method: "GET",
        })
        .then((res) => res.json())
        .then((data) => setGigs(data))
    },[]);

    return (
    <>
        <h2>Gig List</h2>
        <div className="gig-list">
        {gigs.map((gigData) => (
            <div>
                <p>{gigData.band_name}</p>
                <p>{gigData.description}</p>
                <p>{gigData.time}</p>
                <p>{gigData.location}</p>
            </div>
        ))}
        </div>
    </>
    )}

export default GigList