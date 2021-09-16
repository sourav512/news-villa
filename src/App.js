import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router> 
        <Navbar />
        <Switch>
          <Route exact key="generalHome" path="/"><News category={"general"} country={"in"}/></Route>
          <Route exact key="general" path="/world"><News category={"general"} country={""}/></Route>
          <Route exact key="business" path="/business"><News category={"business"} country={""}/></Route>
          <Route exact key="sports" path="/sports"><News category={"sports"} country={""}/></Route>
          <Route exact key="entertainment" path="/entertainment"><News category={"entertainment"} country={""}/></Route>
          <Route exact key="health" path="/health"><News category={"health"} country={""}/></Route>
          <Route exact key="science" path="/science"><News category={"science"} country={""}/></Route>
          <Route exact key="technology" path="/technology"><News category={"technology"} country={""}/></Route>
        </Switch>
        </Router>
        <ScrollToTop/>
      </div>
    )
  }
}
