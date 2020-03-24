import React from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'
import  ButtonExampleLabeled  from './Components/ReactBar';
import DividerExampleVerticalForm from './Components/From';
import StickyExampleOversized from './Components/Sticky';
import Stat from './Components/Stat';

function App() {
  return (
    <div className='App'>
      <StickyExampleOversized />
      <DividerExampleVerticalForm />
      <ButtonExampleLabeled/>
      <Button  to="/home">
        To homepage
      </Button>
      <Stat/>
    </div>
  );
}

export default App;
