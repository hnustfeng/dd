/* eslint-disable no-console */
// import { getNetwork, switchNetwork } from '@wagmi/core';
import { walletClientToSignerAsync } from './useEthersSigner';
import { useAccount,useSwitchChain } from 'wagmi';

export const switchChain = async (chainIdneed: number) => {
  const {chainId} = useAccount();
  const { chains, switchChain, status } =useSwitchChain()
  if (chainId !== chainIdneed) {
    try {
      const chain = await switchChain({chainId:chainIdneed});
      return await walletClientToSignerAsync(chainIdneed);
    } catch {
      throw new Error("Couldn't switch chain.");
    }
  }
  return await walletClientToSignerAsync(chainId);
};