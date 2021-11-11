import React from 'react'
import Covid from './components/Covid';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Error from './components/Error';
import StateWise from './components/statewiseData/StateWise';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Covid} />
        <Route  path="/covidstatewise" component={StateWise} />
        <Route component={Error} />
      </Switch>

    </div>
  )
}
export default App;
