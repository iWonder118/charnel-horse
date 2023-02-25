import { adminDB } from '@/firebase/server' //初期化用のファイルで作った db。自分のディレクトリ構成に合わせて path を変えてください



const message = ({ data }) => {
  return <>{data.text}</>
}

export const getStaticProps = async () => {
  const cityRef = adminDB.collection('test_message').doc('yJMRi4cfciXJuTLCisF1')
  const doc = await cityRef.get()
  const data = doc.data()

  return {
    props: {
      data,
    },
  }
}

export default message