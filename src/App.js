import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';

import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

import Chats from './Chats'
import ChatScreen from './ChatScreen';

function App( ) {
  return (
    <div className="App">
      <Router>
          <Switch> 
          <Route path="/chat/:person">   
              <Header backButton="/chat"/>    {/* It enables the navigation among views of various components in a React Application,  */}
              <ChatScreen/>
            </Route> 

            <Route path="/chat">   
              <Header backButton="/"/>    {/* It enables the navigation among views of various components in a React Application,  */}
              <Chats/>
            </Route>
            
            <Route path="/">  
              <Header />                {/* home router should be in the button of all page */}
              <TinderCards/>
              <SwipeButtons/>
            </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;