// * COMPONENTS
import Head from 'next/head';
import Website from '../components/Website'
// * STYLES
import styles from './index.module.scss'
// * CONTENT
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
        images={[fbm1, fbm2, fbm3, fbm4]}
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
        images={[at1, at2, at3]}
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
        images={[hcc1, hcc2, hcc3, hcc4, hcc5]}
      />

      {/* The Crimson Stitchery .com */}
      <Website
        baseState={false}
        id="HTCS"
        name="The Crimson Stitchery"
        label="thecrimsonstitchery.com"
        style={styles.webSiteURL}
        type="Blog / Portfolio / Small Business"
        description="A website for a knitting YouTube channel and content creator"
        images={[tcs1, tcs2, tcs3, tcs4, tcs5, tcs6, tcs7, tcs8, tcs9, tcs10]}
      />

      {/* END */}
    </main>
  )
}

export default Home;