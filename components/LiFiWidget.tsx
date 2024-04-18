import { LiFiWidget } from '@lifi/widget';
import { WidgetEvents } from './WidgetEvents';
import type { WidgetConfig } from '@lifi/widget';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useConnect, useDisconnect } from 'wagmi';
import { useEthersSigner, walletClientToSigner } from '../utils/useEthersSigner';
import { switchChain } from '../utils/switchChains';
import {getSigner} from "../utils/ProviderOrSigner"

export function Widget ()  {
  const { connectAsync, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const signer = useEthersSigner();
  
  const widgetConfig: WidgetConfig = useMemo(() => {
    const config: WidgetConfig = {
      integrator: 'vite-example',
      containerStyle: {
        border: `1px solid rgb(234, 234, 234)`,
        borderRadius: '16px',
      },
      theme:{
        palette: { "primary":{main: '#F4B512'} },
      },
      languages:{default:"en"},
      walletManagement: {
        signer: signer,
        connect: async () => {
          const result = await connectAsync({ connector: connectors[0] });
          return  await getSigner()
          // const walletClient = await result.connector.getWalletClient();
          
          // if (walletClient) {
          //   return walletClientToSigner(walletClient);
          // } else {
          //   throw Error('WalletClient not found');
          // }
        },
        disconnect: async () => {
          disconnect();
        },
        switchChain,
      },
    };
    return config;
  }, [signer, connectAsync, connectors, disconnect]);
  return (
    <>
      <WidgetEvents />
      <LiFiWidget
        config={widgetConfig}
        integrator="meowprotocol"
      />
    </>
  );
};
