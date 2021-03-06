import './App.css';
import About from './pages/about';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import React, { Component } from "react";
import Beginning from './components/Beginning/Beginning';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Tasks from './pages/tasks';

class App extends Component {
  render() {
    return (
      <Router exact path='/'>
        <div className="App">
          <Navbar></Navbar>
          <Beginning></Beginning>
          <About>
          </About>
          <Contact></Contact>
          <Tasks></Tasks>
        </div>
      </Router>
    );
  }
}

export default App;

// sophie's random form stuff; where does it go/how do i run it
/* render(); {
  return (
    <div>
      <input type="radio" value="5 min" name="time" /> 5 min;
      <input type="radio" value="15 min" name="time" /> 15 min;
      <input type="radio" value="30 min" name="time" /> 30 min;
      <input type="radio" value="60 min" name="time" /> 60 min;
      <input type="radio" value="2+ hrs" name="time" /> 2+ hrs;
      <input type="radio" value="24+ hr" name="time" /> 24+ hr;
      <input type = "submit" value = "submit" id = 'submitButt'/> Submit; 
    </div>
  );
} */