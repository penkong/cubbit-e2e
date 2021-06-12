import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from 'react-router-dom'

import { Landing } from './pages'
import { ErrorBoundary, SimpleSpinner, Header } from './components'
import { MainLayout } from './components/layout/MainLayout/MainLayout.component'

// ---

export const App = () => {
  const location = useLocation()
  return (
    <Router>
      <Header />
      <Switch location={location} key={location.pathname}>
        <ErrorBoundary>
          <Suspense fallback={<SimpleSpinner />}>
            <Route
              exact
              path="/"
              component={() => <MainLayout children={<Landing />} />}
            />

            {/* <Landing /> */}
            {/* </Route> */}
            {/* <Route exact path="/sec">
              <Landing />
            </Route> */}
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </Router>
  )
}
