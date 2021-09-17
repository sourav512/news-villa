import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey = process.env.REACT_APP_API;
  state = {
    progress :0,
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router> 
        <Navbar />
        <LoadingBar
        color='#0d6efd'
        progress={this.state.progress}

      />
        <Switch>
          <Route exact key="generalHome" path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"general"} country={"in"}/></Route>
          <Route exact key="general" path="/world"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"general"} country={""}/></Route>
          <Route exact key="business" path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"business"} country={""}/></Route>
          <Route exact key="sports" path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"sports"} country={""}/></Route>
          <Route exact key="entertainment" path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"entertainment"} country={""}/></Route>
          <Route exact key="health" path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"health"} country={""}/></Route>
          <Route exact key="science" path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"science"} country={""}/></Route>
          <Route exact key="technology" path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} category={"technology"} country={""}/></Route>
        </Switch>
        </Router>
        <ScrollToTop/>
      </div>
    )
  }
}
