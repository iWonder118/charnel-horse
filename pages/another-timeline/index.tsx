import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'

const getTwHz = async () => {
  const response = await fetch("https://xtmfnoys41.execute-api.us-east-1.amazonaws.com/dev/tw_hz");
  const res = await response.json();
  return res;
}

export default function Home() {
  const [twHz, setTwHz] = useState();

  const handleClick = async () => {
    const res = await getTwHz();
    setTwHz(res.text);
  }
  return (
    <>
      <Head>
        <title>CHARNEL-HORSE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <span>{twHz ? twHz : ""}</span>
        </div>
        <button onClick={handleClick}>Tweetを生成</button>
      </main>
    </>
  )
}
