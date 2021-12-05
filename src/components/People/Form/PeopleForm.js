import { Form, Formik } from 'formik';
import { useMemo } from 'react';
import usePeopleStore from '../../../stores/peopleStore';
import peopleValidationSchema from '../../../utils/peopleValidationSchema';
import InputFieldWithValidationMsg from '../../Shared/FormField/InputFieldWithValidationMsg';
import styles from './PeopleForm.module.css';

const initialFormState = {
  firstName: '',
  lastName: '',
  address: '',
  ssn: '',
};
const PeopleForm = () => {
  const people = usePeopleStore((ps) => ps.people);
  const createPerson = usePeopleStore((ps) => ps.createPerson);
  const setPeopleInactivityTracker = usePeopleStore(
    (ps) => ps.setPeopleInactivityTracker
  );
  const peopleCreateError = usePeopleStore((ps) => ps.error);

  const existingSsns = useMemo(() => people?.map((p) => p.ssn) ?? [], [people]);

  return (
    <Formik
      initialValues={initialFormState}
      onSubmit={(value, { resetForm }) => {
        createPerson(value);
        resetForm();
      }}
      validationSchema={peopleValidationSchema(existingSsns)}
      validateOnChange
      validateOnMount
    >
      {({ handleReset, isValid, handleSubmit, values }) => (
        <Form
          className={styles['form-container']}
          onSubmit={handleSubmit}
          onChange={() => setPeopleInactivityTracker(values)}
        >
          <div className={styles['title']}>
            <h1>Add a person</h1>
          </div>
          <div className={styles['form-fields']}>
            <InputFieldWithValidationMsg
              fieldKey="firstName"
              label="First Name"
            />
            <InputFieldWithValidationMsg
              fieldKey="lastName"
              label="Last Name"
            />
            <InputFieldWithValidationMsg fieldKey="address" label="Address" />
            <InputFieldWithValidationMsg fieldKey="ssn" label="SSN" />
          </div>

          {peopleCreateError ? (
            <div className={styles['submit-error']}>Something went wrong</div>
          ) : null}

          <div className={styles['form-btns']}>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" disabled={!isValid}>
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default PeopleForm;
