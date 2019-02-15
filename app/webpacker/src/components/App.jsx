import React from 'react'
import Homepage from './Homepage'
import About from './About'
import { Route, Switch, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route path="/login" component={() => { window.location = "http://localhost:3000/login" }} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default App