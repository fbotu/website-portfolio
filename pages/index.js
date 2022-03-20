// * COMPONENTS
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import InstagramPost from '../components/InstagramPost';
import Link from 'next/link';
import groq from 'groq';
import client from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';
import Socials from '../components/Socials'
// * STYLES
import styles from './index.module.scss'
// * CONTENT
import Hero from '../public/hero.webp'

// * ImageURLBuilder
const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

// * MAIN CODE BLOCK
const Home = ({ work }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Francis Botu - Composer, Guitarist, Producer</title>
        <meta
          name="description"
          content="Francis Botu has worked across music, theatre and performance art and enjoys collaborating on interdisciplinary projects."
        />
        <link
          rel='canonical'
          href='https://francisbotu.com'

        />
      </Head>

      {/* <Header /> */}
      <div
        className={[styles.section, styles.hero].join(" ")}>
        <h1>Home</h1>
        <div className={styles.heroImageWrapper}>
          <Image
            src={Hero}
            alt="hero image"
            layout="responsive"
            width={960 / 2}
            height={640 / 2}
          />
        </div>
      </div>

      <div className={[styles.section, styles.shows].join(" ")}>
        <h1>
          Shows
        </h1>
        <ul className={styles.workList}>
          {work.length > 0 && work.map(
            ({ _id, title = '', slug = '', year = '', mainImage = '' }) =>
              slug && (
                <li key={_id} className={styles.work}>
                  {mainImage && (
                    <div>
                      <a href={`/work/${slug.current}`}>
                        <img
                          className={styles.mainImage}
                          src={urlFor(mainImage)
                            .size(400, 300)
                            .dpr(2)
                            .url()}
                          alt={`${title} show image`}
                        />
                      </a>
                    </div>
                  )}
                  <Link href="/work/[slug]" as={`/work/${slug.current}`}>
                    <a>{title}</a>
                  </Link>{' '}
                  ({new Date(year).getFullYear()})
                  <br />
                  {/* <h3 className={styles.showRole}>{role}</h3> */}
                </li>
              )
          )}
        </ul>
      </div>

      <div className={[styles.section, styles.music].join(" ")}>
        {/* SoundCloud */}
        <h1>
          Music
        </h1>

        <div className={styles.soundCloudWrapper}>
          <iframe
            title="Soundcloud Player"
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1197135694&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
          </iframe>
        </div>
        <div className={styles.soundCloud}>
          <a className={styles.link} href="https://soundcloud.com/pheori" title="Pheori" target="_blank" rel="noreferrer">Pheori</a>
          ·
          <a className={styles.link} href="https://soundcloud.com/pheori/sets/highlights" title="Highlights" target="_blank" rel="noreferrer">Highlights</a>
        </div>

      </div>

      <div className={[styles.section, styles.instagram].join(" ")}>
        <h1>
          Instagram
        </h1>
        <div className={styles.instagramPostsWrapper}>

          <InstagramPost
            instagramURL="https://www.instagram.com/p/CKjHAkSsOyI/"
          />
          <InstagramPost
            instagramURL="https://www.instagram.com/p/CKC7QxOnX3g/"
          />
          <InstagramPost
            instagramURL="https://www.instagram.com/p/CJ09BocJgfd/"
          />

        </div>

      </div>

      <div className={[styles.section, styles.contact, styles.homeSocials].join(" ")}>
        <h1>
          Socials
        </h1>

        <Socials />

      </div>
    </div>
  );
}

export async function getStaticProps() {
  // *GROQ QUERIES FROM SANITYIO
  const work = await client.fetch(groq`
  *[_type == "work" && year < now()] | order(year desc)[0..3]
  `)
  // * PROPS RETURNED FROM SANITYIO GROQ QUERIES
  return {
    props: {
      work,
    }
  }
}

export default Home;