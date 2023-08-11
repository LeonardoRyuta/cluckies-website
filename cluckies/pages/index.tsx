/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Landing.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { DownArrowIcon } from '../components/icons'

export default function Home() {
    const router = useRouter()
    const [dialogueText, setDialogueText] = useState<string>('')

    const typeWriter = (txt: string, i: number) => {
        if (i < txt.length) {
            setDialogueText(txt.substring(0, i + 1))
            setTimeout(() => {
                typeWriter(txt, i + 1)
            }, 50)
        }
    }

    useEffect(() => {
        const txt = 'Welcome traveler, please click on the book to enter the story'
        typeWriter(txt, 0)
    }, [])

    return (
        <>
            <Head>
                <title>Cluckies | Home</title>
                <meta name="description" content="Cluckies nft collection" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main}>
                <div className={styles.enterButtonDiv}>
                    <button onClick={()=>router.push('cave')}>
                        Enter Cluckies
                    </button>
                </div>
                <div className={styles.dialogueWrapper}>
                    <div className={styles.dialogue}>
                        <div>
                            <p style={{color:'lightyellow'}}>Gramps:</p>
                            {dialogueText}
                        </div>
                        <div style={{display:'flex', width:'100%', justifyContent:'flex-end'}}>
                            <DownArrowIcon size={15} extraStyles={{marginTop: '10px', color:'white'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
