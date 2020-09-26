import React from 'react';
import AppHolder from './components/appHolder/appHolder'
import {HashRouter} from 'react-router-dom'
// import './App.scss';

function App() {
  return (
   <HashRouter>
      <AppHolder/>
   </HashRouter>
  );
}

export default App;
