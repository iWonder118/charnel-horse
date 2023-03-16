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
    setTwHz("");
    const res = await getTwHz();
    setTwHz(res.text);
  }
  return (
    <>
      <Head>
        <title>ANOTHER-TIMELINE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[url('https://github.com/iWonder118/charnel-horse/blob/main/public/another_timeline/back_image.png?raw=true')] bg-cover min-h-screen flex justify-center">
        <div className='max-w-6xl bg-gray-700 bg-opacity-40'>

          <div className='text-gray-50 text-2xl pt-10 pl-4 font-thin fade-in-animation-3s-delay-2s opacity-0'>
            TWEET HZ GENERATOR
          </div>
          <div className='text-gray-50 text-6xl pt-4 font-thin fade-in-animation-3s'>
            ANOTHER - TIMELINE
          </div>
          <div className='w-6xl p-4 text-gray-50 text-2xl fade-in-animation-3s-delay-2s opacity-0'>
              TIMELINEの終わり、それが訪れるその日に向け、多学なアヨカヨによる半生命的なトリックを活用した装置。<br />
              これは長の過去のTIMELINEの履歴により、次の履歴への幾千の分岐を作り出す試みであり<br />
              また、隣接次元への漏れがあろうとも、現在のTIMELINEを維持する試みでもある。<br />
              千年の断章を閉じることなく、言葉は言葉を生み、やがて、TIMELINEを生み出す輪廻となるだろう。
          </div>
          <div className='p-4 text-gray-50 text-2xl fade-in-animation-3s-delay-5s opacity-0'>
            (個人的に面白そうだと思い、平沢進の過去のTweetからそれらしい文字列生成をします。)
          </div>
          <div className="mt-20 text-2xl flex items-center justify-center">
            <TypeWriter data={twHz}/>
          </div>
          <div className='mt-20 flex items-center justify-center'>
            <button className='mt-5 px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray text-gray-50 bg-opacity-50 bg-opacity-50 border' onClick={handleClick}>Tweet(恥)を生成</button>
          </div>
        </div>
      </main>
    </>
  )
}
