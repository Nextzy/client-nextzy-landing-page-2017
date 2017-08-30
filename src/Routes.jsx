import React from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from './components/AsyncComponent'
import AppliedRoute from './components/AppliedRoute'

const AsyncHome = asyncComponent(() => import('./containers/app/App'))
const AsyncNotFound = asyncComponent(() =>
  import('./containers/not_found/NotFound')
)

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>
)
