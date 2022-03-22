// * COMPONENTS
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import Socials from '../components/Socials'
// * STYLES
import styles from './index.module.scss'
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



// * MAIN CODE BLOCK
const Home = () => {

  return (
    <main className={styles.container}>
      <Head>
        <title>Francis Botu - Web Development</title>
        <meta
          name="description"
          content="Francis Botu has worked across music, theatre and performance art and enjoys collaborating on interdisciplinary projects."
        />
        <link
          rel='canonical'
          href='https://francisbotu.com'
        />
      </Head>

      {/* FB Music */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionHeader}>
            FB Music
          </h3>
          <button className={styles.webSiteURL}>
            <Link
              href="https://francisbotu.com"
            >
              francisbotu.com
            </Link>
          </button>
          <h4 className={styles.webSiteType}>
            Portfolio / Personal
          </h4>
          <div className={styles.webSiteDescription}>
            <p>
              Portfolio website for a London based musician
            </p>
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
          <button className={styles.webSiteURL}>            
            <Link
              href="https://anushkatay.co.uk"
            >
              anushkatay.co.uk
            </Link>
          </button>
          <h4 className={styles.webSiteType}>
            Personal
          </h4>
          <div className={styles.webSiteDescription}>
            <p>
              Personal website for a London based academic
            </p>
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
          <button className={styles.webSiteURL}>
            <Link
              href="https://healthcarecafe.org.uk"
            >
              healthcarecafe.org.uk
            </Link>
          </button>
          <h4 className={styles.webSiteType}>
            Small Business / Blog
          </h4>
          <div className={styles.webSiteDescription}>
            <p>
              Blog website for a small business in the healthcare sector
            </p>
          </div>
        </div>
        
        <div className={styles.sectionBody}>
          <div className={styles.imageWrapper}>
            <Image
              src={hcc1}
              alt="Health Care Cafe 1"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={hcc2}
              alt="Health Care Cafe 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={hcc3}
              alt="Health Care Cafe 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={hcc4}
              alt="Health Care Cafe 4"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={hcc5}
              alt="Health Care Cafe 5"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
        </div>
      </div>

      {/* The Crimson Stitchery .com */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionHeader}>
          The Crimson Stitchery
          </h3>
          <button className={styles.webSiteURL}>
            <Link
              href="https://thecrimsonstitchery.com"
            >
              thecrimsonstitchery.com
            </Link>
          </button>
          <h4 className={styles.webSiteType}>
            Blog / Portfolio / Small Business
          </h4>
          <div className={styles.webSiteDescription}>
            <p>
              A website for a knitting YouTube channel and content creator
            </p>
          </div>
        </div>
        
        <div className={styles.sectionBody}>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs1}
              alt="The Crimson Stitchery 1"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs2}
              alt="The Crimson Stitchery 2"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={tcs3}
              alt="The Crimson Stitchery 3"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs4}
              alt="The Crimson Stitchery 4"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
            <div className={styles.imageWrapper}>
            <Image
              src={tcs5}
              alt="The Crimson Stitchery 5"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          {/* <div className={styles.imageWrapper}>
            <Image
              src={tcs6}
              alt="The Crimson Stitchery 6"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div> */}
          <div className={styles.imageWrapper}>
            <Image
              src={tcs7}
              alt="The Crimson Stitchery 7"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs8}
              alt="The Crimson Stitchery 8"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={tcs9}
              alt="The Crimson Stitchery 9"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div>
          {/* <div className={styles.imageWrapper}>
            <Image
              src={tcs10}
              alt="The Crimson Stitchery 10"
              layout="responsive"
              // width={700}
              // height={475}
            />
          </div> */}
        </div>
      </div>    

        {/* END */}      
    </main>
  )
}

export default Home;