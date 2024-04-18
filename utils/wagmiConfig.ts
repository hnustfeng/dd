// import { http, createConfig } from '@wagmi/core'
// import { mainnet, scroll, goerli } from '@wagmi/core/chains'

// export const wagmiconfig = createConfig({
//   chains: [scroll, mainnet,goerli],
//   syncConnectedChain:true,
//   multiInjectedProviderDiscovery:true,
//   connectors:[],
//   transports: {
//     [mainnet.id]: http(),
//     [scroll.id]: http(),
//     [goerli.id]: http(),
//   },
// })

import '@rainbow-me/rainbowkit/styles.css';
import {
  mainnet,
  scroll
} from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, bitgetWallet } from '@rainbow-me/rainbowkit/wallets'
import { particleWallet, particleGoogleWallet, particleFacebookWallet, particleTwitterWallet } from '../components/particleWallet';


export const wagmiconfig = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    scroll,
  ],
  ssr: true,
  multiInjectedProviderDiscovery:true,
  wallets:[
    {
        groupName:'Recommended',
        wallets:[metaMaskWallet, bitgetWallet, particleWallet, particleGoogleWallet, particleFacebookWallet, particleTwitterWallet]
    }
  ],
});

