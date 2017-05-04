import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../validate";
import renderField from "../renderField";
const colors = ["Newspapers", "Radio", "TV", "Internet"];

const renderError = ({ meta: { touched, error } }) =>
  (touched && error ? <span>{error}</span> : false);

const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const labelStyle = { textAlign: "center", color: "#4990E2" };

const SignupFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h5 style={labelStyle}>DATE OF BIRTH</h5>
      <Field name="dayBirth" type="text" component={renderField} label="DD" />
      <Field name="monthBirth" type="text" component={renderField} label="MM" />
      <Field
        name="yearBirth"
        type="text"
        component={renderField}
        label="YYYY"
      />
      <div>
        <div>
          <Field name="dateBirth" component={renderError} />
        </div>
      </div>
      <h5 style={labelStyle}>GENDER</h5>
      <div>
        <label>
          <Field name="gender" component="input" type="radio" value="male" />
          {" "}
          Male
        </label>
        <label>
          <Field name="gender" component="input" type="radio" value="female" />
          {" "}
          Female
        </label>
        <label>
          <Field
            name="gender"
            component="input"
            type="radio"
            value="unspecified"
          />
          {" "}
          Unspecified
        </label>
      </div>
      <div>
        <div>
          <Field name="gender" component={renderError} />
        </div>
      </div>
      <h5 style={labelStyle}>WHERE DID YOU HEAR ABOUT US?</h5>
      <Field name="howHearAboutUs" component={renderColorSelector} />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
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
})(SignupFormSecondPage);
