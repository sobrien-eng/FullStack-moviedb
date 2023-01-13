import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function OneMovie() {
  return (
    <Layout>
      <Head>
        <title>movie</title>
      </Head>
      <h1>signle movie</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}
