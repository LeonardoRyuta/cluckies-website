/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import styles from '../styles/Mint.module.css'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { NavBar, Icons } from "../components"
import { useRouter } from "next/router"

export default function Mint() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const { address, isConnected } = useAccount()
    const [randomValues, setRandomValues] = useState([Math.random(), Math.random()])
    const [add, setAdd] = useState<string>()
    const { data } = useBalance({ address })
    const [balance, setBalance] = useState<any>()
    const [amountToMint, setAmountToMint] = useState(1)
    const price = 0.0069
    const supply = 4200
    const [formattedBalance, setFormattedBalance] = useState<any>(0)
    const [total, setTotal] = useState<number>(amountToMint * price)
    const [buttonSrc, setButtonSrc] = useState('/mintButton.png')
    const [hasMinted, setHasMinted] = useState(false);

    useEffect(() => {
      setHasMinted(false);
    }, []);
    
    useEffect(()=>{
        setIsLoading(false)
    },[randomValues])
    useEffect(()=>setBalance(data),[data])
    useEffect(()=>setAdd(address),[address])
    useEffect(()=>setFormattedBalance(balance?.formatted),[balance])

    const changeAmountToMint = (num:number) => {
        if(amountToMint + num > 0 && amountToMint + num <= 10){
            setAmountToMint(amountToMint + num)
            setTotal((amountToMint + num) * price)
        }
    }

    const mint = () => {
        setHasMinted(true)
    }

    return (
        <>
            {
                !isLoading?
                <>
                    <NavBar/>
                    <div className={styles.flashBang}></div>
                {
                    randomValues[0] > 0.7?
                        <div className={styles.fullPage}>
                            {
                                hasMinted?
                                    <video className={styles.afterMintAnimation} autoPlay id='video' onEnded={()=>{setHasMinted(false)}}>
                                        <source src="/MintingPageAssets/afterMint.mp4" type="video/mp4" />
                                    </video>
                                :
                                    <div className={styles.mintWrapper}>
                                        <div className={styles.mintContainer}>
                                        <div className={styles.mintInfo}>
                                                <p>
                                                    Balance: {parseFloat(formattedBalance).toFixed(3)} {balance?.symbol}
                                                </p>
                                                <p>
                                                    Price: {price} ETH
                                                </p>
                                                <p>
                                                    Supply: {supply}/{supply} Cluckies
                                                </p>
                                            </div>
                                            <img src={`/MintingPageAssets/Button And Board${buttonSrc}`} 
                                                alt='mintbutton' 
                                                width='240' 
                                                height='240' 
                                                className={styles.mintButton}
                                                onMouseDown={()=>setButtonSrc('/idleButton.png')}
                                                onMouseUp={()=>setButtonSrc('/mintButton.png')}
                                                onClick={()=>mint()}
                                            />
                                        </div>
                                    </div>           
                            }
                        </div>
                    :
                        <div>
                            {
                                randomValues[1] <= 0.5?
                                    <>
                                        <div className={styles.trollPage1}>
                                            The door lead you the wrong way, try again and see if luck is kind to you.
                                            <button className={styles.goBackButton} onClick={()=>router.push("/cave")}>
                                                Go Back
                                            </button>
                                        </div>
                                    </>
                                :
                                    <>
                                        <div className={styles.trollPage2}>
                                            The door lead you the wrong way, try again and see if luck is kind to you.
                                            <button className={styles.goBackButton} onClick={()=>router.push("/cave")}>
                                                Go Back
                                            </button>
                                        </div>
                                    </>
                            }
                        </div>
                }
                </>
                :
                <div className={styles.loadingScreen}>
                    Loading...
                </div>
            }
            
        </>
    )
}