
import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 text-red-800 p-4">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-bold mb-2">Something went wrong.</h1>
            <p>Please try again later or contact support.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
