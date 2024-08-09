import React from 'react';
import './App.css';
import HomeComponent from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Component/Navbar/Navbar';
import Event from './Component/Events/Events';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeComponent/>
      <Event/>
    </div>
  );
}

export default App;
