import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/about';

const reactContentRoot = document.getElementById("root")

ReactDOM.render(<App />,reactContentRoot)

ReactDOM.render(
    <React.StrictMode>
        <App></App>
        <About></About>
    </React.StrictMode>,
    document.getElementById("root")
  );

  

