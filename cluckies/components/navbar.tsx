import { use, useEffect, useState } from 'react'
import Image from 'next/image'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function NavBar() {
  const { address, isConnected } = useAccount()
  const ensName = useEnsName({address});
  const [connectState, setConnectState] = useState(false)
  const [addy, setAddy] = useState(null)
  const [currenPath, setCurrentPath] = useState<string>()

  useEffect(()=>setAddy(address),[address])
  useEffect(()=>setConnectState(isConnected),[isConnected])

  useEffect(() => {
    setCurrentPath(window?.location.pathname)
  },[])

  const pageList = [
    ['Home', '/'],
    ['Mint', '/mint'],
    ['Stake', '/stake'],
  ]

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  const { disconnect } = useDisconnect()

  return (
    <div className='navContainer'>
      <div className='navTabsContainer'>
      {
        pageList.map((page, index) => {
          return(
            <div className='navTab' key={index}>
              <a
               style={{color:currenPath==page[1]?'#aaaaaa':'white'}} 
               href={page[1]}>{page[0]}</a>
            </div>
          )
        })
      }
      </div>
      {
        connectState?
        <div className='navWalletContainer'>
          {ensName.data??`${addy?.substring(0,6)}...${addy?.substring(addy.length-3,addy.length)}`}
          <div onClick={()=>disconnect()}>
            Disconnect
          </div>
        </div>
        :
        <div className='navWalletContainer'>
          <div onClick={()=>connect()}>
              Connect Wallet
          </div>
        </div>
      }

    </div>
  )
}
