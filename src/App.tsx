import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResolutionForm from "./components/ResolutionForm";
import ResolutionList from "./components/resolution/ResolutionList";

function App() {
  return (
    <div className="App">
      this is app
      <ResolutionForm/>
        <ResolutionList/>
    </div>
  );
}

export default App;
