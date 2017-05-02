const isValidDate = (d, m, y) => {
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((!(y % 4) && y % 100) || !(y % 400)) {
    daysInMonth[1] = 29;
  }
  return !/\D/.test(String(d)) && d > 0 && d <= daysInMonth[--m];
};

const getAge = d1 => {
  const d2 = new Date();
  const diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

const isNumeric = n => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const validate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  if (
    values.password &&
    values.confirmPassword &&
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.gender) {
    errors.gender = "Required";
  }
  if (!values.dayBirth) {
    errors.dayBirth = "Required";
  }
  if (
    !isNumeric(values.dayBirth) ||
    values.dayBirth < 1 ||
    values.dayBirth > 31
  ) {
    errors.dayBirth = "DD should be a number and 31 ≥ DD ≤ 1";
  }
  if (!values.monthBirth) {
    errors.monthBirth = "Required";
  }
  if (
    !isNumeric(values.monthBirth) ||
    values.monthBirth < 1 ||
    values.monthBirth > 12
  ) {
    errors.monthBirth = "MM should be a number and 12 ≥ DD ≤ 1";
  }
  if (!values.yearBirth) {
    errors.yearBirth = "Required";
  }
  if (!isNumeric(values.yearBirth)) {
    errors.yearBirth = "YYYY should be a number";
  }

  if (values.dayBirth && values.monthBirth && values.yearBirth) {
    if (!isValidDate(values.dayBirth, values.monthBirth, values.yearBirth)) {
      errors.dateBirth = "Date is not valid";
    }
    const dateBirth = new Date(
      `${values.yearBirth}-${values.monthBirth}-${values.dayBirth}`
    );
    if (getAge(dateBirth) < 18) {
      errors.dateBirth = "You must be 18 years or older.";
    }
  }

  return errors;
};

export default validate;
