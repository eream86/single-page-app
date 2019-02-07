import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import Dvds from './pages/Dvds'
import NewDvd from './pages/NewDvd'

class AuthenticatedApp extends React.Component {
  render () {
    return (

      <Router>
        <div>
          <Route path="/new-dvd" component={NewDvd} />
          <Route path="/all-dvds" component={Dvds} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
