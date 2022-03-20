// * COMPONENTS
import React from 'react'
// * STYLES
import styles from './Socials.module.scss'
// * CONTENT
import {FaInstagram, FaFacebook, FaYoutube, FaSoundcloud, FaTwitter  } from 'react-icons/fa'

const Socials = () => {

    return (
        <div className={styles.socialIconWrapper}>

            <div className={styles.iconGroup}>
                <a className={styles.socialIcon} href="https://www.youtube.com/channel/UCn2GSZduz1GRig9j-C8-Yuw">
                    <FaYoutube />
                </a>
                <a className={styles.socialIcon} href="https://soundcloud.com/pheori">
                    <FaSoundcloud />
                </a>
                <a className={styles.socialIcon} href="https://www.instagram.com/pheori.music/">
                    <FaInstagram />
                </a>
            </div>
            <div className={styles.iconGroup}>
                <a className={styles.socialIcon} href="https://twitter.com/Francis_Botu">
                    <FaTwitter />
                </a>
                <a className={styles.socialIcon} href="https://www.facebook.com/pheori.music/">
                    <FaFacebook />
                </a>
            </div>
            
        </div>
    )
};

export default Socials;
