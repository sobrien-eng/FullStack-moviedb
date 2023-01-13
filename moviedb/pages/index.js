import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

      </Head>

      <main>
        <h1 className="title">
          <Link href="/movies/first-movie">first movie</Link>
        </h1>
        <h1 className="title">
          <Link href="/signup">sign up</Link>
        </h1>
        <h1 className="title">
          <Link href="/login">login</Link>
        </h1>
        <h1 className="title">
          <Link href="/admindash">admin</Link>
        </h1>

      </main>

      <footer>

      </footer>




    </div>
  )
}