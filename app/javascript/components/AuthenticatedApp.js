import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import Dvds from './pages/Dvds'

class AuthenticatedApp extends React.Component {
  render () {
    return (

      <Router>
        <div>
        <h1>Authenticated</h1>
          <Route path="/all-dvds" component={Dvds} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
