import Head from 'next/head'
import { useState } from 'react'

import TypeWriter from '@/features/typewriterEffect/components/typewriter';

const getTwHz = async () => {
  const response = await fetch("https://xtmfnoys41.execute-api.us-east-1.amazonaws.com/dev/tw_hz");
  const res = await response.json();
  return res;
}

export default function Home() {
  let [twHz, setTwHz] = useState("");

  const handleClick = async () => {
    const res = await getTwHz();
    setTwHz(res.text);
  }
  return (
    <>
      <Head>
        <title>ANOTHER-TIMELINE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-black min-h-screen flex justify-center">
        <div className='max-w-6xl'>

          <div className='text-gray-50 text-2xl pt-10 pl-4 font-thin'>
            TWEET HZ GENERATOR
          </div>
          <div className='text-gray-50 text-6xl pt-4 font-thin'>
            ANOTHER - TIMELINE
          </div>
          <div className='p-4 text-gray-50 text-2xl'>
            <TypeWriter data={["TIMELINEの終わり、それが訪れるその日に向け、多学なアヨカヨによる半生命的なトリックを活用した装置。\nこれは長の過去のTIMELINEの履歴により、次の履歴への幾千の分岐を作り出す試みであり、\nまた、隣接次元への漏れがあろうとも、現在のTIMELINEを維持する試みでもある。\n千年の断章を閉じることなく、言葉は言葉を生み、やがて、TIMELINEを生み出す輪廻となるだろう。"]}/>

          </div>
          <div className="text-2xl">
            <TypeWriter data={[twHz]}/>
          </div>
          <button className='text-gray-50' onClick={handleClick}>Tweet(恥)を生成</button>
        </div>
      </main>
    </>
  )
}
