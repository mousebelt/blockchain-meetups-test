import React from 'react'

import {
  Router,
  Switch,
  Route
} from 'react-router-dom'

import { createBrowserHistory } from 'history'

import Default from 'layouts'
import Splash from 'containers/Splash'
import CityView from 'containers/CityView'
import EventView from 'containers/EventView'

const history = createBrowserHistory()

const router = (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Splash} />
      <Default>
        <Route path='/sanfrancisco' component={CityView} />
        <Route path='/events/:eventId' component={EventView} />
      </Default>
    </Switch>
  </Router>
)

export default router