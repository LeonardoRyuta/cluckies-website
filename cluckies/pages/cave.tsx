/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Cave.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Cave() {
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
  const [started, setStarted] = useState<boolean>(false)
  const [transitionState, setTransitionState] = useState<string>('transform')

  const moveCluckie = (e: any) => {
    setIsWalking(true)
    if (e.key === 'ArrowRight' || e.key === 'd') {
      setRotateY(0)
      setX(xPos + 15)
      setStarted(true)
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
      setRotateY(180)
      setX(xPos - 15)
      setStarted(true)
    }

    if (xPos > document.body.clientWidth) {
      if ( bgImg === b1) {
        setBgImg(b2)
        setRedEyes(`${styles.eyesP2}`)
        setTransitionState('none')
        setX(0)
      }
    }

    if (xPos >= document.body.clientWidth-100) {
      if (bgImg === b2) {
        setIsLoading(true)
        setBgImg('')
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
      img.src = `CavePageAssets/Cluckie/walking/walking${i}.png`
    }
    for (let i = 0; i < 6; i++) {
      const img = new Image()
      img.src = `CavePageAssets/Cluckie/idle/idle${i}.png`
    }
    console.log('cached')
  }

  useEffect(() => {
    setTransitionState('transform')
    document.addEventListener('keydown', moveCluckie)
    return () => {
      document.removeEventListener('keydown', moveCluckie)
    }
  }, [xPos])

  useEffect(() => {
    cacheImage()
    document.addEventListener('keyup', ()=>{setIsWalking(false)})
  }, [])

  walkingTimeout = setTimeout(walkCluckie, 75)

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
          <video className={styles.page3Video} id='video' 
            autoPlay 
          onEnded={()=>{router.push('/mint')}}>
            <source src="/CavePageAssets/Page 3/page3Animation.mp4" type="video/mp4" />
          </video>
          :
          <>
            {
              !started?
              <div className={styles.instructionsContainer}>
                Use A&D or the right and left arrow keys to move
              </div>
              :
              null
            }
            <div className={styles.flashBang}></div>
            <div className={`${styles.redEyes} ${redEyes}`}></div>
            <div className={styles.container}>
              <img 
                className={styles.cluckie}
                style={{
                  transform:`translateX(${xPos}px) translateY(1rem) rotateY(${rotateY}deg)`,
                  transition: `${transitionState} 0.1s ease-out`
                }}
                id='cluckie'
                src={`CavePageAssets/Cluckie/${cluckieSrc}.png`}
              />
              <img
                className={styles.land}
                src={`CavePageAssets/Land.png`}
              />
            </div>
          </>
        }
      </div>
    </>
  )
}
