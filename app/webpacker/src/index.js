import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './Header'
import HeaderScroller from './HeaderScroller'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <div>
        <Header/>
        <HeaderScroller/>
        <div>
          <main role="main" className="container">
            <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
              <img className="mr-3" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48"/>
              <div className="lh-100">
                <h6 className="mb-0 text-white lh-100">Bootstrap</h6>
                <small>Since 2011</small>
              </div>
            </div>
            <div className="my-3 p-3 bg-white rounded shadow-sm">
              <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
              <Route path="/" component={App} />
            </div>
          </main>
        </div>
      </div>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})