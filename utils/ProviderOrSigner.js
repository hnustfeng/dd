import { providers } from 'ethers';
import { getConnections } from '@wagmi/core'
import { wagmiconfig } from './wagmiConfig'

// @ts-ignore
const getProviderOrSigner = async (needSigner = false, web3ModalRef,connector) => {
    var connect = getConnections(wagmiconfig)
    var provider
    if(connect.length != 0){
        provider = await connect[0].connector.getProvider();
    }else{
        provider = await connector.getProvider()
    }
    // @ts-ignore
    var web3Provider =new providers.Web3Provider(provider)


    if (needSigner) {
        // @ts-ignore
        const signer = web3Provider.getSigner();
        return signer;
    }
    return web3Provider;
}
// @ts-ignore
export const getSigner = async ()=>{
    var web3Provider = await getConnections(wagmiconfig)[0].connector.getProvider()
        // @ts-ignore
        const signer = web3Provider.getSigner();
        return signer;

}

module.exports = {
    getProviderOrSigner
}