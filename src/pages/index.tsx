import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/nav-bar'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>pygame</title>
        <meta name="description" content="Anything and everything pygame." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <Hero/>
      </main>
    </>
  )
}
