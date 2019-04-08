import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { getImage } from "./actionCreator";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.requestImage();
  };

  render() {
    return (
      <div className="App">
        <h1>Load an image</h1>
        <button onClick={this.handleClick} style={{ maxHeight: "300px" }}>
          Click me
        </button>
        <br />
        <img src={this.props.image} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    image: state.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    requestImage: () => dispatch(getImage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
