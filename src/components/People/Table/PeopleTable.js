import usePeopleStore from '../../../stores/peopleStore';
import PersonRow from './PersonRow';
import styles from './PeopleTable.module.css';
import useAuthStore from '../../../stores/Auth/authStore';
import { useEffect } from 'react';
import useIdleFunction from '../../../hooks/useIdleFunction';

const columnHeaders = ['First Name', 'Last Name', 'Address', 'SSN'];
const idleTimeoutSeconds = 120;

const PeopleTable = () => {
  const people = usePeopleStore((ps) => ps.people);
  const token = useAuthStore((as) => as.token);
  const getPeople = usePeopleStore((ps) => ps.getPeople);
  const peopleInactivityTracker = usePeopleStore(
    (ps) => ps.peopleInactivityTracker
  );

  useIdleFunction(idleTimeoutSeconds, peopleInactivityTracker, getPeople);

  useEffect(() => {
    if (token) getPeople();
  }, [getPeople, token]);

  return (
    <table className={styles['people-table']}>
      <thead>
        <tr>
          {columnHeaders.map((ch) => (
            <th key={`table-header-${ch}`}>{ch}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {people?.map((p) => (
          <PersonRow key={`person-row-${p.ssn}`} person={p} />
        ))}
      </tbody>
    </table>
  );
};
export default PeopleTable;
