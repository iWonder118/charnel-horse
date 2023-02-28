import Head from 'next/head'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'

const getTwHz = async () => {
  const response = await fetch("https://xtmfnoys41.execute-api.us-east-1.amazonaws.com/dev/tw_hz");
  const res = await response.json();
  return res;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>CHARNEL-HORSE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="text-3xl">
      <Link href="/another-timeline">
        ANOTHER-TIMELINE
      </Link>
      </main>
    </>
  )
}
