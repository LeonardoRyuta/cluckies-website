/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import styles from '../styles/Stake.module.css'
import { NavBar } from "../components"
import Image from "next/image"
import { useBalance, useAccount } from "wagmi"
import { RightIcon, LeftIcon } from "../components/icons"

export default function Stake() {
    const { address, isConnected } = useAccount()
    const [add, setAdd] = useState<string>()
    const { data } = useBalance({ address, token:'0xD13cfD3133239a3c73a9E535A5c4DadEE36b395c' })
    const [balance, setBalance] = useState<any>()
    const [currentEgg, setCurrentEgg] = useState<number>(0)
    const [previousEgg, setPreviousEgg] = useState<number>(0)
    const [nextEgg, setNextEgg] = useState<number>(0)
    const [eggsXPos, setEggsXPos] = useState<number>(0)

    useEffect(()=>setBalance(data),[data])
    useEffect(()=>setAdd(address),[address])
    useEffect(()=>{
        if(currentEgg===0){
            setNextEgg(currentEgg+1)
            setPreviousEgg(mockInventory.length-1)
        }
        else if(currentEgg===mockInventory.length-1){
            setNextEgg(0)
            setPreviousEgg(currentEgg-1)
        }
        else{
            setNextEgg(currentEgg+1)
            setPreviousEgg(currentEgg-1)
        }
    },[currentEgg])

    const mockInventory: any[] = [
        {eggImg:'/Eggs/Gold.png', bgImg:'/BG/goldBg.png', name:'Gold Egg #1245'},
        {eggImg:'/Eggs/Polka Green.png', bgImg:'/BG/commonBg.png', name:'Polka Green Egg #2635'},
        {eggImg:'/Eggs/Galaxy.png', bgImg:'/BG/galaxyBg.png', name:'Galaxy Egg #4652'},
        {eggImg:'/Eggs/Polka Blue.png', bgImg:'/BG/commonBg.png', name:'Polka Blue Egg #1245'},
        {eggImg:'/Eggs/Polka White.png', bgImg:'/BG/commonBg.png', name:'Polka Red Egg #1245'},
        {eggImg:'/Eggs/Diamond.png', bgImg:'/BG/diamondBg.png', name:'Diamond Egg #1245'},

    ]

    const NextEgg = () => {
        setEggsXPos(eggsXPos+(window.innerWidth/3))
        setCurrentEgg(currentEgg===0?mockInventory.length-1:currentEgg-1)
    }

    const PreviousEgg = () => {
        setEggsXPos(eggsXPos-(window.innerWidth/3))
        setCurrentEgg(currentEgg===mockInventory.length-1?0:currentEgg+1)
    }

    useEffect(()=>{
        console.log(balance)
    },[balance])

    return (
        <div className={styles.fullPage} style={{backgroundImage:`url(${mockInventory[currentEgg].bgImg})`}}>
            <div className={styles.pageCover}></div>
            <div className={styles.middleTest}></div>
            <NavBar/>

            <div className={styles.ContainersWrapper}>

                <div className={styles.eggCarouselContainer}>
                    <div className={styles.eggCarousel} style={{transform:`translateX(${eggsXPos}px)`}}>
                        {/* {
                            mockInventory.map((egg, index)=>{
                                return(
                                    <div className={styles.eggContainer} key={index}>
                                        <img src={egg.eggImg} alt='egg' width={200} height={200}/>
                                    </div>
                                )
                            })
                        } */}
                        <div className={styles.eggContainer}>
                            <img src={mockInventory[previousEgg].eggImg} alt='egg' width={200} height={200}/>
                        </div>
                        <div className={styles.eggContainer}>
                            <img src={mockInventory[currentEgg].eggImg} alt='egg' width={200} height={200}/>
                        </div>
                        <div className={styles.eggContainer}>
                            <img src={mockInventory[nextEgg].eggImg} alt='egg' width={200} height={200}/>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.overlayUI}>
                <LeftIcon extraStyles={{cursor:'pointer'}} size={150} onClick={()=>NextEgg()}/>
                <RightIcon extraStyles={{cursor:'pointer'}} size={150} onClick={()=>PreviousEgg()}/>
            </div>
        </div>
    )
}