import '../css/App.css';
import Condition from './Condition';
import AffichageBoucle from './AffichageBoucle';
import TestJSX from './TestJSX';
import { useState } from 'react';
import {Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TestJSX />}>
        </Route>
        <Route path="/Condition" element={<Condition/>}>
        </Route>
        <Route path="/AffichageBoucle" element={<AffichageBoucle/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;