import React from 'react';

import './App.css';
import ResolutionForm from "./components/form/ResolutionForm";
import ResolutionList from "./components/resolution/ResolutionList";
import FavList from './components/fav/FavList';
function App() {
  return (
    <div className="App">
      this is app
      <ResolutionForm/>
        <ResolutionList/>
        <FavList />
    </div>
  );
}

export default App;
