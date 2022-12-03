import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"

const chains = [chain.mainnet, chain.goerli, chain.polygon, chain.polygonMumbai];
const { provider, webSocketProvider } = configureChains(chains, [
  infuraProvider({ apiKey: "ef52caaa75e241a3a6fcccee4b8a0fd4", priority: 0 }),
  publicProvider({ priority: 1 }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector(),
    new WalletConnectConnector({
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
    </WagmiConfig>
  </>
}
