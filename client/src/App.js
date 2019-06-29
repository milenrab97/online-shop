import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Shop from './components/Shop'
import NavBar from './components/NavBar'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <NavBar />

                <Shop />
            </div>
        </BrowserRouter>
    )
}

export default App
