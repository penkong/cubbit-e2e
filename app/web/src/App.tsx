import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import { ErrorBoundary, Spinner } from './components/'

// ---

export const App = () => (
  <>
    <Switch location={location} key={location.pathname}>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/">
            <div>hello</div>
          </Route>
        </Suspense>
      </ErrorBoundary>
    </Switch>
  </>
)
