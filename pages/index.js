// * COMPONENTS
import Head from 'next/head';
import Website from '../components/Website'
// * STYLES
import styles from './index.module.scss'
// * CONTENT
import fbmArray from '../components/sets/FBM'
import atArray from '../components/sets/AT'
import hccArray from '../components/sets/HCC'
import tcsArray from '../components/sets/TCS'

// * MAIN CODE BLOCK
const Home = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Francis Botu - Web Development</title>
        <meta
          name="description"
          content="A web development portfolio by Francis Botu."
        />
        <link
          rel='canonical'
          href='https://webdevby.francisbotu.com'
        />
      </Head>

      {/* ----------------------------------------------------------------     */}

      {/* Francis Botu .com */}
      <Website
        baseState={true}
        id="FBM"
        name="FB Music"
        label="francisbotu.com"
        style={styles.webSiteURL}
        type="Portfolio / Personal"
        description="Portfolio website for a London based musician"
        images={fbmArray}
      />

      {/* Anushka Tay .co.uk */}
      <Website
        baseState={false}
        id="AT"
        name="Anushka Tay"
        label="anushkatay.com"
        style={styles.webSiteURL}
        type="Personal"
        description="Personal website for a London based academic"
        images={atArray}
      />

      {/* Health Care Cafe .org.uk */}
      <Website
        baseState={false}
        id="HCC"
        name="Health Care Cafe"
        label="healthcarecafe.org.uk"
        style={styles.webSiteURL}
        type="Small Business / Blog"
        description="Blog website for a small business in the healthcare sector"
        images={hccArray}
      />

      {/* The Crimson Stitchery .com */}
      <Website
        baseState={false}
        id="TCS"
        name="The Crimson Stitchery"
        label="thecrimsonstitchery.com"
        style={styles.webSiteURL}
        type="Blog / Portfolio / Small Business"
        description="A website for a knitting YouTube channel and content creator"
        images={tcsArray}
      />

      {/* END */}
    </main>
  )
}

export default Home;