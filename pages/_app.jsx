import '../styles/globals.css';
// @ts-ignore
import { useEffect, useState } from "react"
// @ts-ignore
import { createConfig, WagmiProvider, http } from 'wagmi';
// @ts-ignore
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { wagmiconfig } from '../utils/wagmiConfig';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';
import { scroll } from 'wagmi/chains'



const config = wagmiconfig
const unsubscribe = config.subscribe(
  (state) => state.chainId,
  (chainId) => console.log(`Chain ID changed to ${chainId}`),
)
unsubscribe()


// @ts-ignore
function MyApp({ Component, pageProps }) {
  // @ts-ignore
  function setRem(designSize) {
    const html = document && document.getElementsByTagName("html")[0];
    const clientW =
      document.documentElement.clientWidth || document.body.clientWidth;

    let rem = (clientW * 10) / designSize;

    html.style.fontSize = rem + "px";
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRem(1440);

      window.onresize = function () {
        setRem(1440);
      };
    }
  }, [])

  const queryClient = new QueryClient()
  return (
    <AuthCoreContextProvider
      options={
        {
          projectId: '0b221eea-f520-4635-81ee-591fac3939fd',
          clientKey: 'cvM6uEn2hKfyMqM56boVC338RQF0N69mAUNrUm1N',
          appId: 'b6544bd8-7d23-4c73-a972-dc4493968e49',
          customStyle: {
            zIndex: 2147483650, // must greater than 2147483646
          },
        }
      }
    >
      <WagmiProvider config={config} >
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider locale='en' initialChain={scroll} modalSize='compact' theme={lightTheme({ accentColor: '#F4B512' })} coolMode>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </AuthCoreContextProvider>
  );
}

export default MyApp;
