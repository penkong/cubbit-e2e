import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from 'react-router-dom'

import { Landing } from './pages'
import { ErrorBoundary, SimpleSpinner } from './components'

// ---

export const App = () => {
  const location = useLocation()
  return (
    <Router>
      <Switch location={location} key={location.pathname}>
        <ErrorBoundary>
          <Suspense fallback={<SimpleSpinner />}>
            <Route exact path="/">
              <Landing />
            </Route>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Router>
  )
}
