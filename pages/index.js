// * COMPONENTS
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials'
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
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionHeader}>
            FB Music
          </h3>
          <div className={styles.webSiteURL}>
            <Link
              href="francisbotu.com"
            >
              francisbotu.com
            </Link>
          </div>
        </div>
        
        <div className={styles.sectionBody}>
          <div className={styles.imageWrapper}>
            <Image
              src={fbm1}
              alt="FB Music 1"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={fbm2}
              alt="FB Music 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={fbm3}
              alt="FB Music 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={fbm4}
              alt="FB Music 4"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
        </div>
      </div>

      {/* Anushka Tay .co.uk */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionHeader}>
            Anushka Tay
          </h3>
          <div className={styles.webSiteURL}>
            <Link
              href="anushkatay.co.uk"
            >
              anushkatay.co.uk
            </Link>
          </div>
        </div>
        
        <div className={styles.sectionBody}>
          <div className={styles.imageWrapper}>
            <Image
              src={at1}
              alt="Anushka Tay 1"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={at2}
              alt="Anushka Tay 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={at3}
              alt="Anushka Tay 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
        </div>
      </div>


      {/* Health Care Cafe .org.uk */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionHeader}>
            Health Care Cafe
          </h3>
          <div className={styles.webSiteURL}>
            <Link
              href="healthcarecafe.org.uk"
            >
              healthcarecafe.org.uk
            </Link>
          </div>
        </div>
        
        <div className={styles.sectionBody}>
          <div className={styles.imageWrapper}>
            <Image
              src={hcc1}
              alt="Anushka Tay 1"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={hcc2}
              alt="Anushka Tay 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={hcc3}
              alt="Anushka Tay 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={hcc4}
              alt="Anushka Tay 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={hcc5}
              alt="Anushka Tay 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
        </div>
      </div>

      {/* Health Care Cafe .org.uk */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionHeader}>
            Health Care Cafe
          </h3>
          <div className={styles.webSiteURL}>
            <Link
              href="healthcarecafe.org.uk"
            >
              healthcarecafe.org.uk
            </Link>
          </div>
        </div>
        
        <div className={styles.sectionBody}>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs1}
              alt="Anushka Tay 1"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs2}
              alt="Anushka Tay 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={tcs3}
              alt="Anushka Tay 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs4}
              alt="Anushka Tay 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={tcs5}
              alt="Anushka Tay 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs6}
              alt="Anushka Tay 1"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs7}
              alt="Anushka Tay 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={tcs8}
              alt="Anushka Tay 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs9}
              alt="Anushka Tay 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={tcs10}
              alt="Anushka Tay 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
        </div>
      </div>    

        {/* END */}      
    </div>
  )
}

export default Home;