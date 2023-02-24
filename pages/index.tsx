import Head from 'next/head'
import Link from 'next/link'

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
