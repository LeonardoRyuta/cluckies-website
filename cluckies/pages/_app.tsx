import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { canto } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function App({ Component, pageProps }: AppProps) {
  const { chains, provider } = configureChains(
    [canto],
    [alchemyProvider({ apiKey: `${process.env.ALCHEMY_API_KEY}` }), publicProvider()],
  )

  const client = createClient({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    provider,
  })
  
  return <WagmiConfig client={client}><Component {...pageProps} /></WagmiConfig>
}

