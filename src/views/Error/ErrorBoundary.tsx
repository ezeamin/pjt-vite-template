// no types for react-error-boundary

import { Component, ReactNode } from 'react';

import ErrorPage from './ErrorPage';

class ErrorBoundary extends Component {
  constructor(props: { children?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // console.log(error, window.location.href);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPage />;
    }

    // @ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;
