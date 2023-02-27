/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Landing.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [xPos, setX] = useState<number>(0)
  const b1 = `${styles.backgroundImgP1}`
  const b2 = `${styles.backgroundImgP2}`
  const [bgImg, setBgImg] = useState<string>(b1)
  const [walkingState, setWalkingState] = useState<number>(0)
  const [idleState, setIdleState] = useState<number>(0)
  const [rotateY, setRotateY] = useState<number>(0)
  const [cluckieSrc, setCluckieSrc] = useState<string>(`walking/walking${walkingState}`)
  let walkingTimeout: any;
  const [isWalking, setIsWalking] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [redEyes, setRedEyes] = useState<string>(`${styles.eyesP1}`)

  const moveCluckie = (e: any) => {
    setIsWalking(true)
    if (e.key === 'ArrowRight' || e.key === 'd') {
      setRotateY(0)
      setX(xPos + 10)
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
      setRotateY(180)
      setX(xPos - 10)
    }

    if (xPos > document.body.clientWidth) {
      if ( bgImg === b1) {
        setBgImg(b2)
        setRedEyes(`${styles.eyesP2}`)
        setX(0)
      }
    }

    if (xPos >= document.body.clientWidth-100) {
      if (bgImg === b2) {
        setIsLoading(true)
        router.push('/mint')
      }
    }

    if (xPos < 0) {
      if ( bgImg === b1) {
        setX(0)
      } else 
      if (bgImg === b2) {
        setBgImg(b1)
        setRedEyes(`${styles.eyesP1}`)
        setX(document.body.clientWidth)
      }
    }
  }

  const walkCluckie = () => {
    if (!isWalking) {
      setCluckieSrc(`idle/idle${idleState}`)
      idle()
    } else {
      setCluckieSrc(`walking/walking${walkingState}`)
      walk()
    }
  }

  const walk = () => {
    if (walkingState === 7) {
      setWalkingState(0)
      return
    }
    setWalkingState(walkingState + 1)
  }
  
  const idle = () => {
    if (idleState === 5) {
      setIdleState(0)
      return
    }
    setIdleState(idleState + 1)
  }

  const cacheImage = () => {
    for (let i = 0; i < 8; i++) {
      const img = new Image()
      img.src = `LandingPageAssets/Cluckie/walking/walking${i}.png`
    }
    for (let i = 0; i < 6; i++) {
      const img = new Image()
      img.src = `LandingPageAssets/Cluckie/idle/idle${i}.png`
    }
    console.log('cached')
  }

  useEffect(() => {
    document.addEventListener('keydown', moveCluckie)
    return () => {
      document.removeEventListener('keydown', moveCluckie)
    }
  }, [xPos])

  useEffect(() => {
    cacheImage()
    document.addEventListener('keyup', ()=>{setIsWalking(false)})
  }, [])

  walkingTimeout = setTimeout(walkCluckie, 100)
  
  return (
    <>
      <Head>
        <title>Cluckies | Home</title>
        <meta name="description" content="Cluckies nft collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.main} ${bgImg}`} id='main'>
        {
          isLoading?
          <div className={styles.loading}>
            Loading...
          </div>
          :
          <>
            <div className={`${styles.redEyes} ${redEyes}`} 
            ></div>
            <div className={styles.container}>
              <img className={styles.cluckie}
                style={{
                  transform:`translateX(${xPos}px) rotateY(${rotateY}deg)`,
                }}
                id='cluckie'
                src={`LandingPageAssets/Cluckie/${cluckieSrc}.png`}
            />
            </div>
          </>
        }
      </div>
    </>
  )
}
