import Head from 'next/head'
import ContactForm from '../components/ContactForm'


export default function Contact() {
  return (
    <>
      <Head>
        <title>De forenede kålavlere</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/cabbage.png" />
      </Head>
      <ContactForm />
    </>
  )
}
