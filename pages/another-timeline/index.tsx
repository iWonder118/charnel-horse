import Head from 'next/head'
import { useState } from 'react'

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
      <main className="bg-black min-h-screen py-0 px-2 flex flex-col justify-center items-center">
        <div className='text-gray-50 text-3xl cp'>
          これは過去のTIMELINEの履歴により、次の履歴への幾千の分岐を作り出す。<br />
          また、隣接次元への漏れがあろうとも、現在のTIMELINEを維持する試みである。<br />
          千年の断章を閉じることなく、言葉は言葉を生み、やがて、TIMELINEを生み出す輪廻となるだろう<br />
        </div>
        <div className="text-8xl text-gray-600">
          <span>{twHz ? twHz : ""}</span>
        </div>
        <button className='text-gray-50' onClick={handleClick}>Tweet(恥)を生成</button>
      </main>
    </>
  )
}
