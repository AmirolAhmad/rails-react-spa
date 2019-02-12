import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from '../src/Header'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <div>
        <Header/>
        <hr/>
        <Route path="/" component={App} />
      </div>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})