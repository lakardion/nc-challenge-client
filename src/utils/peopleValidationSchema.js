import * as yup from "yup";
const requiredMessage = "Required";
const minLengthMessage = "Has to be longer";
const ssnFormatMessage = "Format should be ###-##-####";
const ssnExistsAlreadyMessage = "SSN should be unique";
const ssnLength = 11;
const peopleValidationSchema = (existingSsns) =>
  yup.object({
    firstName: yup.string().min(2, minLengthMessage).required(requiredMessage),
    lastName: yup.string().min(2, minLengthMessage).required(requiredMessage),
    address: yup.string().min(2, minLengthMessage).required(requiredMessage),
    ssn: yup
      .string()
      .required(requiredMessage)
      .length(ssnLength, minLengthMessage)
      .matches(new RegExp("^\\d{3}-\\d{2}-\\d{4}$"), ssnFormatMessage)
      .notOneOf(existingSsns, ssnExistsAlreadyMessage),
  });

export default peopleValidationSchema;
