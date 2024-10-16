import { Component, PropsWithChildren } from "react";

export class ErrorBoundary extends Component {
  state: { hasError: boolean; errorMessage: string };

  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }
  componentDidCatch(error: Error) {
    console.error("Error caught by ErrorBoundary: ", error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }
    return this.props.children;
  }
}
