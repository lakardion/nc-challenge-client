import PeopleForm from '../components/People/Form/PeopleForm';
import PeopleTable from '../components/People/Table/PeopleTable';
import styles from './Home.module.css';

const Home = () => (
  <main>
    <section className={styles['people-form-table']}>
      <PeopleForm />
      <PeopleTable />
    </section>
  </main>
);
export default Home;
