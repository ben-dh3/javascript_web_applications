import "./App.css";
import Loading from "./Loading"
import React, { useState, useEffect } from 'react';
import GigList from "./GigList";

function App() {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 3300)
    }, [])
    if (loading) {
        return <Loading/>
    }
  return (
    <>
      <GigList />
    </>
  );
}

export default App;
