// * COMPONENTS
import { useState } from 'react'
// * STYLES
import styles from '../pages/contact.module.scss'
// * CONTENT

export default function ContactForm() {
   
    const [clicked, setClicked] = useState(false);

    async function handleOnSubmit(e) {

        // ? e = event
        e.preventDefault(); 

        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
        if ( !field.name ) return;
        formData[field.name] = field.value;
        });
        fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify(formData)
        });
        console.log(formData);

        setClicked(true);
        }     
   
    return (
        <div className={styles.contactForm}>
                
          <form method='post' onSubmit={handleOnSubmit}>

            <div className={styles.formInputs}>

              {/* Name */}
              <div className={styles.formInputName}>
                <label htmlFor="name">
                <h4>First Name</h4>
                </label><br/>

                <input 
                  id="name" 
                  name="name"
                  type="text" 
                  autoComplete="name" 
                  required />
              </div>

              {/* Last */}
              <div className={styles.formInputLast}>
                <label htmlFor="last">
                <h4>Last Name</h4>
                </label><br/>

                <input 
                  id="last"                
                  name="last"
                  type="text" 
                  autoComplete="last" 
                  required />
              </div>

              {/* Email */}
              <div className={styles.formInputEmail}>
                <label htmlFor="email">
                <h4>Email</h4>
                </label><br/>

                <input 
                  id="email"
                  name="email" 
                  type="text" 
                  autoComplete="email" 
                  required />
              </div>

              {/* Subject */}
              <div className={styles.formInputSubject}>
                <label htmlFor="subject">
                <h4>Subject</h4>
                </label><br/>

                <input 
                  id="subject" 
                  name="subject" 
                  type="text" 
                  autoComplete="subject" 
                  required />
              </div>
          
              {/* Message */}
              <div className={styles.formInputMessage}>
                <label htmlFor="message">
                <h4>Message</h4>
                </label><br/> 
                            
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  cols="50"
                  required ></textarea>
              </div>
            </div>
          
            <button className={styles.sendButton} type="submit" 
            >
            <h4>Send</h4>
            </button>

            <h4 className={`${clicked ? styles.submitted : styles.notSubmitted}`}>
                Thank you, your message was successfully submitted
            </h4>
                      
          </form>
    
        </div>    
    );
}