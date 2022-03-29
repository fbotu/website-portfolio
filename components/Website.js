// * COMPONENTS
import Image from 'next/image';
import { useState, useEffect } from 'react'
import Button from '../components/Button';
// * STYLES
import styles from '../pages/index.module.scss'
// * CONTENT

const Listener = (action) => {
  useEffect(() => {
    window.addEventListener('scroll', action)
    return () => removeEventListener('scroll', action)
  }, []);
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
  const link = `https://www.${label}`
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
    // ! CONSOLE LOGS
    // console.log(element);
    // console.log(windowHeight);
    // console.log("element top " + elementTop);
    // console.log(elementVisible);
    // console.log("position " + position);
    // console.log(images)

    function isActive() {
      (elementTop < position) ? setReveal(true) 
      // : setReveal(false);
      : '';
      // console.log(reveal);
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
                    width={item.width/2}
                    height={item.height/2}
                    loading="lazy"
                    quality="60"
                  />
                </div>
                {/* {console.log(`${item.src} is ${item.width/2}px * ${item.height/2}px`)} */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Website;