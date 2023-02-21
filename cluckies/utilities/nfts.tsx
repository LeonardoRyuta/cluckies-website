import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export default function Nfts(address: string, contractAddress: string) {
    const transactionsArray: any[] = []
    const ownedCluckies: string[] = [] 

    const tokenTransactionsURL = `https://evm.explorer.canto.io/api?module=account&action=tokentx&address=${address}&contractaddress=${contractAddress}`

    const getTransactions = async () => {
        const response = await fetch(tokenTransactionsURL)
        const data = await response.json()
        console.log(data.result)
        
        if (data.result) {
            data.result.map((transaction: {[x: string]: any; to: any }) => {
                if (transactionsArray.indexOf(transaction.tokenID) < 0) {
                    transactionsArray.push(transaction.tokenID)
                } else {
                    transactionsArray.splice(transactionsArray.indexOf(transaction.tokenID), 1)
                }
            })    
        }
        console.log(transactionsArray)
        transactionsArray.map((transaction: any, index: any) => {
            ownedCluckies.push(`https://cloudflare-ipfs.com/ipfs/5mDpOiOuhc1JEREdoG1xJTI-5s5JryWSsJ67ZxuGJLo/${transaction}.png`)
        })

        console.log(ownedCluckies)
    }

    getTransactions()
    
    return ownedCluckies
}