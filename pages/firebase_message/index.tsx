import { adminDB } from '@/firebase/server' 

type Message = {
  text: string;
};

const message = ( data: Message) => {
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