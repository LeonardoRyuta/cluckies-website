import { useEffect, useState } from "react"
import Image from "next/image"
import styles from '../styles/Mint.module.css'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { NavBar, Icons } from "../components"

export default function Mint() {
    const { address, isConnected } = useAccount()
    const [add, setAdd] = useState<string>()
    const { data } = useBalance({ address })
    const [balance, setBalance] = useState<any>()
    const [amountToMint, setAmountToMint] = useState(1)
    const price = 42 //CANTO
    const supply = 4200
    const [formattedBalance, setFormattedBalance] = useState<any>(0)
    const [total, setTotal] = useState<number>(amountToMint * price)

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

    }

    return (
        <div className={styles.fullPage}>
            <NavBar/>
            <div>
                <div className={styles.mintWrapper}>
                    <div className={styles.mintContainer}>
                        <div className={styles.imageWrapper}>
                            <Image src='/unrevealed.gif' alt='unrevealed egg' width='240' height='240'/>
                        </div>

                        <div className={styles.mintInfo}>
                            <p>
                                Balance: {parseFloat(formattedBalance).toFixed(3)} {balance?.symbol}
                            </p>
                            <p>
                                Price: {price} CANTO
                            </p>
                            <p>
                                Supply: {supply}/{supply} Cluckies
                            </p>
                        </div>

                        <div className={styles.mintSelector}>
                            <Icons.MinusIcon size='40px' extraStyles={{cursor:'pointer'}} onClick={()=>changeAmountToMint(-1)}/>
                            <div>
                                <p>
                                    {amountToMint}
                                </p>
                            </div>
                            <Icons.PlusIcon size='40px' extraStyles={{cursor:'pointer'}} onClick={()=>changeAmountToMint(1)}/>
                        </div>

                        <div className={styles.mintButtonWrapper}>
                            <p>
                                Total: {total} CANTO
                            </p>
                            <button className={styles.mintButton}>MINT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}