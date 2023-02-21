/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { Nfts } from '../utilities'

export default function Test() {
    const { address, isConnected } = useAccount()
    const [add, setAdd] = useState<string>()
    const [nfts, setNfts] = useState<any>([])

    useEffect(()=>setAdd('0x8575e8617cB99959F8657c1EbD44Ca52c109c217'),[address]);

    const test = () => {
        setNfts(Nfts(add, '0xe6dBa1b1aB8D3f18Dc304eA495E3674fCE9985fA'))
        console.log(nfts)
    }

    useEffect(()=>{
        test()
    },[add])

    return (
        <div>
            <div>
                This is a testing page    
            </div>
            <div>
                <p>
                    Connected address: {add}
                </p>
                <p>
                    Balance: {useBalance({ address:add }).data?.formatted} Canto
                </p>
                <div>
                    {
                        nfts.map((cluckie: any, index: any) => {
                            return (
                                <img src={cluckie} alt='cluckie' width='100px' height='100px'/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}