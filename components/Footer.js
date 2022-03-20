// * COMPONENTS
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/logo.webp';
// * STYLES
import styles from './footer.module.scss'

export default function Footer() {
  return (        
    <footer className={styles.footerWrapper}>
      <h2 className={styles.madeBy}>
      made by
      </h2>
      <Link
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >            
        <div className={styles.logoWrapper}>
            <Image
              src={Logo}
              alt="Logo"
              layout="responsive"
              // width={2559/8}
              // height={853/8}
              />
        </div>
      </Link>
    </footer>
  );
}
