import React from "react";
import { reduxForm } from "redux-form";
import validate from "../../validate";

const SignupFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img src={require("../../../public/success.png")} alt="Success!" />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit">
            Go to Dashboard
          </button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "signup",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignupFormSecondPage);
