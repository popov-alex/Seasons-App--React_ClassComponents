import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import SeasonComponent from "./SeasonComponent";
import Spinner from "./Spinner";
import "./App.css";

class App extends React.Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ error: error.message })
    );
  }

  renderContent() {
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    }
    if (!this.state.error && this.state.lat) {
      return (
        <div>
          <SeasonComponent lat={this.state.lat} />
        </div>
      );
    }
    return <Spinner />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
