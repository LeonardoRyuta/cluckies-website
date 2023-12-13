import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
<<<<<<< Updated upstream
=======

const base = {
  id: 8453,
  name: 'Base',
  network: 'base',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://base.meowrpc.com'] },
    default: { http: ['https://base.meowrpc.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'BaseScan', url: 'https://basescan.org/' },
    default: { name: 'BaseScan', url: 'https://basescan.org/' },
  }
}

const baseGoerli = {
  id: 84531,
  name: 'Base Goerli',
  network: 'base goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://base-goerli.public.blastapi.io'] },
    default: { http: ['https://base-goerli.public.blastapi.io'] },
  },
  blockExplorers: {
    etherscan: { name: 'BaseScan', url: 'https://goerli.basescan.org/' },
    default: { name: 'BaseScan', url: 'https://goerli.basescan.org/' },
  }
}
>>>>>>> Stashed changes

export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: `${process.env.ALCHEMY_API_KEY}` }), publicProvider()],
  )

  const client = createClient({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    provider,
  })
  
<<<<<<< Updated upstream
  return <WagmiConfig client={client}><Component {...pageProps} /></WagmiConfig>
=======
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
>>>>>>> Stashed changes
}

