// * COMPONENTS
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import Socials from '../components/Socials'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import Button from '../components/Button';

// * STYLES
import styles from '../pages/index.module.scss'
// * CONTENT
// import { VscGithub } from 'react-icons/vsc';


// *FB Music
import fbm1 from '../public/websites/fb-music/image-wrapperfb-music.webp'
import fbm2 from '../public/websites/fb-music/image-6fb-music.webp'
import fbm3 from '../public/websites/fb-music/image-7fb-music.webp'
import fbm4 from '../public/websites/fb-music/image-10fb-music.webp'

// * Anushka Tay
import at1 from '../public/websites/anushka-tay/image-1anushka-tay.webp'
import at2 from '../public/websites/anushka-tay/image-2anushka-tay.webp'
import at3 from '../public/websites/anushka-tay/image-3anushka-tay.webp'

// * Health Care Cafe
import hcc1 from '../public/websites/hcc/image-1hcc.webp'
import hcc2 from '../public/websites/hcc/image-2hcc.webp'
import hcc3 from '../public/websites/hcc/image-3hcc.webp'
import hcc4 from '../public/websites/hcc/image-4hcc.webp'
import hcc5 from '../public/websites/hcc/image-5hcc.webp'

// * The Crimson Stitchery
import tcs1 from '../public/websites/tcs/image-1tcs.webp'
import tcs2 from '../public/websites/tcs/image-2tcs.webp'
import tcs3 from '../public/websites/tcs/image-3tcs.webp'
import tcs4 from '../public/websites/tcs/image-4tcs.webp'
import tcs5 from '../public/websites/tcs/image-5tcs.webp'
import tcs6 from '../public/websites/tcs/image-6tcs.webp'
import tcs7 from '../public/websites/tcs/image-7tcs.webp'
import tcs8 from '../public/websites/tcs/image-9tcs.webp'
import tcs9 from '../public/websites/tcs/image-10tcs.webp'
import tcs10 from '../public/websites/tcs/image-11tcs.webp'

const Listener = (action) => {
  useEffect(() => {
    window.addEventListener('scroll', action)
    return () => removeEventListener('scroll', action)
  }, [action]);
}
// *MAIN CODE BLOCK
const Website = (props) => {
  // * FUNCTION PROPS
  const baseState = props.baseState;
  const id = props.id;
  const el = `#${id}`;
  // * PROPS
  const name = props.name;
  const label = props.label;
  const link = props.link;
  const style = props.style;
  const type = props.type;
  const description = props.description;
  const images = props.images;

  // ! FUNCTIONS
  // * USE STATES
  const [reveal, setReveal] = useState(baseState);

  // * REVEAL FUNCTION
  function revealSite() {
    let element = document.querySelector(el);    
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 150;
    let position = windowHeight - elementVisible;
    // console.log(element);
    // console.log(windowHeight);
    // console.log("element top " + elementTop);
    // console.log(elementVisible);
    // console.log("position " + position);
    // console.log(images)

    function isActive() {
      (elementTop < position) ? setReveal(true) : setReveal(false);
      console.log(reveal);
    }
    isActive()
  }
  Listener(revealSite);
  


  // ! RENDER
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionHeader}>
          {name}
        </h3>
        <Button
          label={label}
          link={link}
          style={style}
        />
        <h4 className={styles.webSiteType}>
          {type}
        </h4>
        <div className={styles.webSiteDescription}>
          <p>
            {description}
          </p>
        </div>
      </div>
      <div
        id={id}
        className={`${reveal ?
          [styles.sectionBody, styles.active].join(" ")
          : styles.sectionBody
          }`}
      >
        <ul className={styles.WebsiteList}>
          {images.map((item, index) => {
            return (
              <li key={index} className={styles.WebsiteListItem}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt="test"
                    layout="responsive"
                    width={item.width}
                    height={item.height}
                  />
                </div>
                {console.log(item.src)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Website;