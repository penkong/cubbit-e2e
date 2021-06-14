import { Component, ErrorInfo } from 'react'

// ---

interface AppProps {}

// ---

export class ErrorBoundary extends Component<AppProps> {
  state = { hasError: false }

  static getDerivedStateFromError = (error: ErrorEvent) => {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Sorry this page is broken.</h2>
        </div>
      )
    }

    return this.props.children
  }
}
