import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../validate";
import renderField from "../renderField";

const SignupFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <Field
        name="confirmPassword"
        type="password"
        component={renderField}
        label="Confirm"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "signup",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SignupFormFirstPage);
