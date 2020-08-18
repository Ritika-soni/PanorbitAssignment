import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {persons} from './components/persons/persons';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div className="App">
      <LandingPage name= {persons.users[0].name}
        name1= {persons.users[1].name}
        profilepicture= {persons.users[0].profilepicture}
       />
    </div>
  );
}

export default App;
