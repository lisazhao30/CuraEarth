import './App.css';
import Navbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <div className="App">
      <span id = "vert-line"></span>
      <span id = "vert-line2"></span>
      <Navbar></Navbar>
      <div id = "header">
        <div id = "title">
          Our planet in our hands.
        </div>
      </div>
    </div>
  );
}

export default App;
