import React, { useState } from 'react';
import Header from './Layout/Header';
import Home from './components/Home';
import Modalapp from './components/Modalapp';




function App() {
    
  const [model,setModel] =useState(false)
  const closeModel =(e)=>{
    setModel(!model)
  }
  return (
   <div className="app">
      <Header />
      <Home />
      {model && <Modalapp closeModel={closeModel} text={"hey model"} />}
        
    
   </div>
  );
}

export default App;
