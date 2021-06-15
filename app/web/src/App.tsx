import React, { Suspense } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { Landing, FileGetter } from './pages'
import { ErrorBoundary, SimpleSpinner, Header, MainLayout } from './components'

// ---

export const App = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <Switch location={location} key={location.pathname}>
        <ErrorBoundary>
          <Suspense fallback={<SimpleSpinner />}>
            <Route
              exact
              path="/getter"
              component={() => <MainLayout children={<FileGetter />} />}
            />
            <Route
              exact
              path="/"
              component={() => <MainLayout children={<Landing />} />}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  )
}
