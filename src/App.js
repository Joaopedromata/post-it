import React from 'react';
import './App.css';
import DragNDrop from './components/DragNDrop'
import Data from './services/api'
import { FiGithub, FiInstagram } from 'react-icons/fi'

const data = Data()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-box">
          <div className="logo">
            Post-it
          </div>
          <div className="Social">
            <div className="git-hub">
               <a href="https://github.com/Joaopedromata"><FiGithub size={24} color="#FFF" /></a> 
            </div>
            <div className="insta">
                <a external href="https://www.instagram.com/poxajoao__/"> <FiInstagram size={24} color="#FFF" /></a>  
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <DragNDrop data={data} />
      </div>

                   
    </div>
  );
}

export default App;
