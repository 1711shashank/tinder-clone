import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />
        <Router>
          <Switch>          
            <Route path="/chat"> 
              <h1>I am a chat Page</h1>
            </Route>
            
            <Route path="/">                  {/* home router should be in the button of all page */}
              <TinderCards/>
              <SwipeButtons/>
            </Route>
          </Switch>

          {/* Tinder Caer */}

          {/* Button */}
        </Router>

    </div>
  );
}

export default App;