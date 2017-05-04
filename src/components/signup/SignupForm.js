import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupFormFirstPage from "./SignupFormFirstPage";
import SignupFormSecondPage from "./SignupFormSecondPage";
import SignupFormThirdPage from "./SignupFormThirdPage";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  getTitle() {
    return this.state.page === 3 ? "Thank You!" : "Signup";
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    const materStyle = { width: "100%" };
    const headerStyle = { textAlign: "center", color: "#4990E2" };

    return (
      <div>
        <h4 style={headerStyle}>{this.getTitle()}</h4>
        <progress max="3" value={this.state.page} style={materStyle} />
        {page === 1 && <SignupFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <SignupFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <SignupFormThirdPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SignupForm;
