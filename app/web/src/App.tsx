import { Suspense } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { ErrorBoundary, SimpleSpinner } from './components'

// ---

export const App = () => {
  const location = useLocation()
  return (
    <>
      <Switch location={location} key={location.pathname}>
        <ErrorBoundary>
          <Suspense fallback={<SimpleSpinner />}>
            <Route exact path="/">
              <div>hello</div>
            </Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  )
}
