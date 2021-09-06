import React, { Component } from 'react';
import './App.css';
import ListOfGif from './components/ListOfGif'

import { Link, Route } from "wouter";

export default function App() {
  return (

    <div className="App">
      <section className="App-content">
       <h1>Single Page Aplication</h1>
       <Link to='/gif/Pandas'>Pandas</Link>
       <Link to='/gif/Gatos'>Gatos</Link>
       <Link to='/gif/Mapache'>Mapaches</Link>
       <Link to='/gif/finisher'>finisher</Link>
       
       <Route 
       component= {ListOfGif}
       path="/gif/:keyword" 
       /> 
       
        </section>
    </div>
          )
}

 
