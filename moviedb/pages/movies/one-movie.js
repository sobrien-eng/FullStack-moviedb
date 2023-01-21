import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function OneMovie() {
  return (
    <Layout>
      <Head>
        <title>movie</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.container}>
        </div>
      </div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}
