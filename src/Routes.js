import React from 'react'
import { Router, Route, Redirect, IndexRoute } from 'react-router'

/* Pages */
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'

export default function Routes({ history }) {
  return (
    <Router history={ history }>
      <Route path="/">
        <IndexRoute component={ Home } />
        <Redirect from="home" to="/" />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  )
}
