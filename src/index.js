import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
}
  from "react-router-dom";
  
import Home from './Home';
import project from './project';
import contact from './contact';


const routing = (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home}/>
         <Route exact path="/contact" component={contact}/>
         <Route exact path="/project" component={project}/>
        </Switch>
      </>
      </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

