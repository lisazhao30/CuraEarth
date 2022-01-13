import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const reactContentRoot = document.getElementById("root")

ReactDOM.render(<App />,reactContentRoot)

ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
    document.getElementById("root")
  );

  

