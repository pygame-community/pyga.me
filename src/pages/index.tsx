import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/nav-bar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Powered from '@/components/powered';
import GetInvolved from '@/components/get-involved';
import Footer from '@/components/footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        <Navbar />
        <Hero />
        <About />
        <Powered />
        <GetInvolved />
        <Footer />
      </main>
    </>
  );
}
