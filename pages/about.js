// * COMPONENTS
import Head from 'next/head'
import Image from 'next/image'
// * STYLE
import styles from '../pages/about.module.scss'
// * CONTENT
import Hero from '../public/hero.webp'

function Home() {

  return (
      <div>
         <Head>
            <title>About Me</title>
            <meta 
                name="description" 
                content="Bio and recent projects" 
            />
            <link 
                rel='canonical' 
                href='https://francisbotu.com/about' 
            />
        </Head>

        <main>

        <div className={styles.section}>
        <h1>About</h1>
            <div className={styles.about}>
                <div className={styles.heroImageWrapper}>
                    <Image
                    src={Hero}
                    alt="hero image"
                    layout="responsive"
                    />
                </div>
                <div className={styles.body}>
                    <p>
                        Francis Botu is a composer and sound designer influenced by organic structures, synthesis, world rhythms and impressionist harmony.
                    </p>
                    <p>
                        He has worked across music, theatre and performance art and enjoys collaborating on interdisciplinary projects.
                    </p>
                    <p>
                        Francis is a multi-instrumentalist musician and plays classical guitar, electric guitar, bass guitar, synth, electronic percussion and piano. He trained in composition at Trinity College of Music.
                    </p>
                    <h6>
                    Recent projects include:
                    </h6>
                    <ul className={styles.showList}>
                        <li>
                        Overflow (Bush Theatre)
                        </li>
                        <li>
                        Zikametz festival (France)
                        </li>
                        <li>
                        Meadows in the Mountain festival (Bulgaria) 
                        </li>
                        <li>
                        Choreography residency at L’arboreto (Italy) 
                        </li>
                        <li>
                        Pixel Tears (Camden People’s Theatre) 
                        </li>
                        <li>
                        European tour of ‘KULT’ (London / Portugal / Germany)
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        </main>

    </div>
  )
}

export default Home;