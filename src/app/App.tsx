import React from 'react';
import './App.scss';

import { Router } from "../pages";
import NavHeader from '../widgets/header/navHeader';

function App() {
  return (
    <>
    <NavHeader></NavHeader>
  
    <Router />      
    </>
    

  );
}

export default App;
