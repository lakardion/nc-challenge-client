import { ErrorMessage, Field } from 'formik';
import styles from './FormField.module.css';

const InputFieldWithValidationMsg = ({
  fieldKey,
  label,
  fieldId = fieldKey,
}) => {
  return (
    <div className={styles['form-field-validation']}>
      <div className={styles['field']}>
        <label htmlFor={fieldKey}>{label}</label>
        <Field id={fieldId} name={fieldKey} />
      </div>
      <div className={styles['error-message-container']}>
        <ErrorMessage name={fieldKey} />
      </div>
    </div>
  );
};
export default InputFieldWithValidationMsg;
