import Head from 'next/head'
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Kål</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      
      <h1 className='bg-teal-100 text-teal-500 text-9xl text-center p-60 font-bold'>
         <span className='bg-teal-100 text-gray-600'>HER KOMMER</span> KÅL 🥬</h1>
    </>
  )
}
