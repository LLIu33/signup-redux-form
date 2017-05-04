const formatResponse = values => {
  const dateBirth = new Date(
    `${values.yearBirth}-${values.monthBirth}-${values.dayBirth}`
  );

  return {
    user_data: {
      email: values.email,
      password: values.password,
      date_of_birth: (dateBirth / 1000) | 0,
      how_hear_about_us: values.howHearAboutUs || null,
      gender: values.gender
    }
  };
};

export default (function showResults(values) {
  console.log(formatResponse(values));
});
