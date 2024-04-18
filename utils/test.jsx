import { useReadContract } from 'wagmi'
import { abi,EthereumAddress } from "../ABIs/poolabi";
import { mainnet } from 'viem/chains';

export function testWagmi() {
    console.log("0000000000000000000000");
    try{
  const result = useReadContract({
    abi, 
    address: EthereumAddress,
    functionName: 'getUserAccountData',
    account:"0x9A9b7CE86946717aF2404FF699a177e4f14F8a73",
    args:[EthereumAddress],
    chainId:mainnet.id,
  })
  console.log("dddddddddddddddddd",result);
}catch(error){
    console.log("kkkkkkkkkkk",error);
    
}
  
}

export default testWagmi;