import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>CHARNEL-HORSE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-[url('https://github.com/iWonder118/charnel-horse/blob/main/public/charnel_horse/back_image.png?raw=true')] bg-cover  min-h-screen">
        <header className="bg-white shadow">
          <nav className="container mx-auto flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold">CHARNEL - HORSE</a>
          </nav>
        </header>
        {/* <body className="py-10 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gray-200 bg-opacity-40" >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">みんんさ　ご！</h2>
                <p className="text-gray-700 leading-relaxed mb-6">このサイトは平沢進をモチーフに面白いことができないかと試行錯誤した覚書集です。</p>
              </div>
              <div className="bg-gray-200 bg-opacity-40">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">ANOTHER-TIMELINE</h2>
                <p className="text-gray-700 leading-relaxed mb-6">過去のTweetを元に発言しそうな文字列生成をします。</p>
                <Link href="/another-timeline" className="mt-5 px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray text-gray-50 bg-opacity-50 bg-opacity-50 border">
                  ANOTHER-TIMELINE
                </Link>
              </div>
            </div>
          </div>
        </body> */}
      </main>
    </>
  )
}
