import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello world
          <button onClick={() => {
            let params =
              `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=0,top=1,bottom=1,right=0`;
            window.open('/survey', 'Survey', params)
          }}>Click me</button>
        </h1>
      </main>
    </div>
  )
}
