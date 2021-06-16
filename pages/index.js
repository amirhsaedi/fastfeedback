import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useAuth } from '../lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main className={styles.main}>
        {!auth?.user && <button onClick={(e) => auth.signInWithGithub()}>SignIn</button>}
        {auth?.user && <button onClick={(e) => auth.signOut()}>SignOut</button>}
        <div>{auth?.user?.email}</div>
      </main>
    </div>
  );
};

export default Home;
