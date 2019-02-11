import React from 'react'
import Homepage from './Homepage'
import About from './About'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    )
  }
}

export default App