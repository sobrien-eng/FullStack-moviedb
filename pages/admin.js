import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/admin.module.css';
import AdminSearchResult from '../components/AdminSearchResult.js';
import { Button, Form, FormGroup, Label, Input, FormText, Card, Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Admin() {
    return (
        <>
            <Head>
                <title>admin</title>
            </Head>
            <form class={styles.form}>
                <div class={styles.usernameContainer}>
                    <div class={styles.usernameInput}>
                        <Input type="text" placeholder="Enter a username" />
                    </div>
                    <div class={styles.searchBtn}>
                    <Button>Search</Button>
                    </div>
                </div>
            </form>
            <div class={styles.resultContainer}>
            <AdminSearchResult/>
            </div>
        </>


    )
}
