import React from 'react';
// * STYLES
import styles from './header.module.scss'
// * COMPONENTS
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { MenuItems } from './MenuItems'
// * CONTENT
import Logo from '../public/logo.webp'
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

function Header() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked);

  return (
      <div className={styles.navBar}>
        <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >            
            <div className={styles.logoWrapper}
                  onClick={handleClick}>
                {/* <Image
                  src={Logo}
                  alt="Logo"
                  layout="responsive"
                  width={2559/10}
                  height={853/10}
                  /> */}
                  <h1>frAncis botu Web deVelopMent</h1>

            </div>
          </Link>
        {/* <div onClick={handleClick} className={styles.mobileMenuIcon}>
            <i>
              {clicked ? <FaTimes /> : <FaBars />}
            </i>
        </div>
        <ul className={styles.navMenu}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index} className={styles.navMenuItem}>
                        <Link className={item.cName} href={item.url} passHref>
                          <h2 className={styles.menuItem}>{item.title}</h2>

                        </Link>
                    </li>
                );
            })}
        </ul>
        { clicked &&
        <ul className={styles.navMenuMobile}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index} className={styles.navMenuItemMobile}>
                        <Link className={item.cName} href={item.url} passHref>
                          <a className={styles.mobileMenuLink} onClick={handleClick}>
                              <h2 className={styles.mobileMenuItem}>{item.title}</h2>
                          </a>                          
                        </Link>
                    </li>
                );
            })}
        </ul> 
        } */}
      </div>
    );
}

export default Header;
