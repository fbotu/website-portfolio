/* COMPONENTS */
import Head from 'next/head'
// * STYLES
import styles from '../pages/contact.module.scss'
/* CONTENT */
import Socials from '../components/Socials'
import ContactForm from '../components/ContactForm.client'

export default function Contact() {
  // // ? e = event
  // async function handleOnSubmit(e) {
  //   e.preventDefault(); 

  //   const formData = {}
  //   Array.from(e.currentTarget.elements).forEach(field => {
  //     if ( !field.name ) return;
  //     formData[field.name] = field.value;
  //   });
  //   fetch('/api/mail', {
  //     method: 'post',
  //     body: JSON.stringify(formData)
  //   });
  //   console.log(formData);
  // }

  return (
    <div className={styles.contact}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" 
              content="Get in touch for bookings, commissions, or general questions" 
        />
        <link rel='canonical' href='https://francisbotu.com/contact' />
      </Head>

      <div className={styles.section}>

        <h1>Contact</h1>

        <ContactForm />

        <Socials />      

      </div>    

    </div>
  )
}