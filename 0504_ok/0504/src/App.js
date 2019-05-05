import React from 'react';
import logo from './logo.svg';
import './App.css';
import AgeComponent from './component/AgeComponent'
import NameComponent from './component/NameComponent'
import AddressComponent from './component/AddressComponent'



function App() {
  return (
    <div className="App">
        <AgeComponent/>
        <NameComponent/>
        <AddressComponent/>
    </div>
  );
}

export default App;
