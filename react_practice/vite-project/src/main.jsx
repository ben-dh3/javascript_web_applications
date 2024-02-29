import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile from './components/Profile.jsx'
import Product from './components/Product.jsx'
import Counter from './components/Counter.jsx'
import ClickListener from './components/ClickListener.jsx'
import OnChange from './components/OnChange.jsx'
import Die from './components/Die.jsx'
import Form from './components/Form.jsx'
import Pokemon from './components/Pokemon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Pokemon />
    <Form />
    <OnChange />
    <ClickListener />
    <Counter />
    <Die />
    <Profile
    name="Ben"
    job="SE"
    birthdate="1997" />
    <Product
    name="Vacuum cleaner"
    description="Very handy and tidy-y"
    price={1900}
    />
    <Product
    name="Robot cleaner"
    description="Futuristic and cool"
    price={190}
    />
  </React.StrictMode>,
)
