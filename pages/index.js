import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Bobby Colley</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <img height={200} width={200} className={styles.profile} src='/bobby.jpeg' />
          <h1 className={styles.title}>
            Bobby Colley
          </h1>
        </main>

      </div>

      <img height={"auto"} width={'100%'} src='/hero.jpg' alt='Hero image' />
      <div className={styles.section}>
        <h1 className={styles.title}>
          Technologies
        </h1>
        <li>React</li>
        <li>NextJS</li>
        <li>NestJS</li>
        <li>AWS</li>
        <li>Microsoft Asure</li>
        <li>xCode/Apple Connect</li>
        <li>Google Play Store</li>
      </div>
      <footer className={styles.footer}>
        links here
      </footer>
    </div>
  )
}
