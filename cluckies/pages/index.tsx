import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landing.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Cluckies | Home</title>
        <meta name="description" content="Cluckies nft collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        Hi there, cluckies are coming soon!
      </div>
    </>
  )
}
