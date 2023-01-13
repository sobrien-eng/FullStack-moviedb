import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/admin.module.css';

export default function Admin() {
    return (
        <>
            <Head>
                <title>admin</title>
            </Head>
            <Link href="/">home</Link>
            <Link href="/login">login</Link>
        </>


    )
}
