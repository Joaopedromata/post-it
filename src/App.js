import React from 'react';
import './App.css';
import DragNDrop from './components/DragNDrop'

const data = [
   {title: 'group 1', items: ['1', '2', '3','4']},
   {title: 'group 2', items: ['5', '6', '7']},
   {title: 'group 3', items: ['8', '9', '10']}
  ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data} />
      </header>
                   
    </div>
  );
}

export default App;
