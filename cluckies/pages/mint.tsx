/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import styles from '../styles/Mint.module.css'
import { useAccount, useConnect, useDisconnect, useBalance, useSigner } from 'wagmi'
import { NavBar, Icons } from "../components"
import { useRouter } from "next/router"
import ABI from '../utilities/abi.json'
import { ethers } from "ethers"

export default function Mint() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const { address, isConnected } = useAccount()
    const [randomValues, setRandomValues] = useState([0.8, 0.8])
    // const [randomValues, setRandomValues] = useState([Math.random(), Math.random()])
    const [add, setAdd] = useState<string>()
    const { data } = useBalance({ address })
    const [balance, setBalance] = useState<any>()
    const [amountToMint, setAmountToMint] = useState(1)
    const price = 0.000000000000001
    const supply = 4200
    const [formattedBalance, setFormattedBalance] = useState<any>(0)
    const [total, setTotal] = useState<number>(amountToMint * price)
    const [buttonSrc, setButtonSrc] = useState('/mintButton.png')
    const [hasMinted, setHasMinted] = useState(false);
    const [provider, setProvider] = useState<any>()
    const [signer, setSigner] = useState<any>()
    const [contract, setContract] = useState<any>()

    useEffect(() => {
      setHasMinted(false);
      setProvider(new ethers.providers.Web3Provider(window.ethereum as any))
    }, []);

    useEffect(() => {
        if (provider) {
            setSigner(provider.getSigner());
        }
    }, [provider]);

    useEffect(() => {
        if (signer) {
            setContract(new ethers.Contract('0x40C348d97BA9A421b4d87B6a62309206c95323E5', ABI, signer));
        }
    }, [signer]);
    
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

    const mint = async () => {
        // const mint1 = await contract?.mint(amountToMint, {value: ethers.utils.parseEther((amountToMint * 0.001).toString())})
        // provider.once(mint1?.hash, (receipt: any) => {
        //     console.log(receipt);
        //     setHasMinted(true)
        // });
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
                                                {
                                                    !isConnected?
                                                        <p>
                                                            Please connect your wallet to mint
                                                        </p>
                                                    :
                                                        <p>
                                                            Balance: {parseFloat(formattedBalance).toFixed(3)} {balance?.symbol}
                                                        </p>
                                                }
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