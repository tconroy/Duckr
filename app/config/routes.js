import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer } from 'containers'

const routes = (
	<Router history={hashHistory}>
		<Router path='/' component={MainContainer}>
      <Route path='auth' component={AuthenticateContainer} />
      <IndexRoute component={HomeContainer} />
    </Router>
	</Router>
)

export default routes
