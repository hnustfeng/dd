import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useAccount, useConnect, useSwitchChain } from 'wagmi'
import Image from 'next/image';
import copy from "../public/copy.png"
import exclaim_point from "../public/exclaim_point.png"
import { Popover, Input, message, Modal } from 'antd';
import Blockies from 'react-blockies';
import { post, get } from '../utils/funcaxios'
import { BigNumber, Contract } from 'ethers'
import MeowToken from "../public/meowtoken.png"
import { ClaimABI } from '../ABIs/Claim';
import { getProviderOrSigner } from '../utils/ProviderOrSigner';
import { scroll, goerli, mainnet } from 'viem/chains'
import { useReadContract } from 'wagmi';
import { ClaimABIts, ClaimAddressts } from '../ABIs/ClaimTs';
import { switchChain } from "@wagmi/core"
import { wagmiconfig } from '../utils/wagmiConfig';
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import { Button } from 'antd/es/radio';
import x from "../public/x.png"
import discord from "../public/discord.png"
import email from "../public/email.png"
import {
    ArrowRightOutlined
} from '@ant-design/icons';
export default function Profile() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { address, isConnecting, isDisconnected, chainId } = useAccount();
    const [openWallet, setOpenWallet] = useState(false)
    const web3ModalRef = useRef();
    // const { chains, switchChain, status } =useSwitchChain()
    const [userReward, setUserReward] = useState("")
    const [open, setOpen] = useState(false);
    //移除
    const [rOpen, setROpen] = useState(false);
    const button_style = 'px-[18px] py-[12px] bg-[#F4B512]  rounded-[6px] text-[white] font-bold font-semibold cursor-pointer text-[15px] border-none';
    const content1 = (<div className='text-[1.4rem] font-medium' >Governance Token</div>)
    const content2 = (<div className='text-[1.4rem] font-medium' >Reputation Token</div>)
    const content3 = (<div className='text-[1.4rem] font-medium' >Invite your friends to join Meow, and you can earn more rewards.</div>)
    const content4 = (<div className='text-[1.4rem] font-medium' >
        <div>1.One wallet address can link multiple social media accounts.</div>
        <div>2.To unlink a social media account, send a request, and the process will take 7 days.</div>
    </div>)
    const copy_address = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(address).then(() => {
                message.success("copy success!");
            })
        } else {
            clipboardCopy(address)
            message.success("copy success!");
        }
    }
    const copy_link = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(data.inviteCode).then(() => {
                message.success("copy success!");
            })
        } else {
            clipboardCopy(data.inviteCode)
            message.success("copy success!");
        }
    }


    const result = useReadContract({
        abi: ClaimABIts,
        address: ClaimAddressts,
        args: [address],
        functionName: "user",
        chainId: scroll.id,
    })
    // setUserReward(BigNumber.from(result.data.toString()).div(BigNumber.from(10).pow(6)).toString())
    useEffect(() => {
        if (result.status == "success") {
            setUserReward(BigNumber.from(result.data.toString()).div(BigNumber.from(10).pow(6)).toString())
        }
    }, [result])

    const remove = () => {
        setROpen(true)
    }

    const claimReward = async () => {
        if (chainId != scroll.id) {
            try {
                await switchChain(wagmiconfig, { chainId: scroll.id })
            } catch (error) {
                message.error("Transaction failed, please try again!")
                return
            }
        }
        const provider = await getProviderOrSigner(true, web3ModalRef);
        const claim = new Contract(
            ClaimABI.ClaimAddress,
            ClaimABI.abi,
            provider
        );
        try {
            const tx = await claim.claim("0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4")
            tx.wait();
        } catch (error) {
            if (error.code != "ACTION_REJECTED") {
                try {
                    if (error.error.data.message) {
                        message.error(error.error.data.message + " Please try again!")
                    } else {
                        message.error(error.error.message + " Please try again!")
                    }

                } catch (error) {
                    message.error("Transaction failed, please try again!")
                }
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get('/v1/Profile', { address: address });
                if (response.data.token == "" || response.data.token == "0") {
                    response.data.token = 0
                } else {
                    response.data.token = ((BigNumber.from(response.data.token).div(BigNumber.from(10).pow(16)).toNumber()) / 100).toFixed(2)
                }
                response.data.inviteCode = "https://meowprotocol.xyz/Dashboard?code=" + response.data.inviteCode
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [address])
    const add = () => {

    }
    return (
        <div className='h-screen'>
            <Header isOpen={openWallet}></Header>
            {address ? <div className='box-border px-[11.2rem] py-[64px]'>
                {/* <div className='w-[80px] h-[80px] bg-[yellow] rounded-[50%] mb-[16px]'></div> */}
                <Blockies className='hidden w-[8rem] h-[8rem] bg-[yellow] rounded-[50%] mb-[1.6rem]' seed={address ? address.toLowerCase() : ""} size={24} scale={4} />
                <Blockies className='md:hidden w-[8rem] h-[8rem] bg-[yellow] rounded-[50%] mb-[1.6rem]' seed={address ? address.toLowerCase() : ""} size={14} scale={4} />
                <div suppressHydrationWarning className='min-[1px]:text-[24px] md:text-[3.2rem] font-bold mb-[1.6rem]'>{address && (address.slice(0, 6) + "..." + address.slice(-4))}</div>
                <div className='mb-[64px]'><Image src={copy} onClick={copy_address} className='cursor-pointer mr-[8px]' height={15}></Image><span className='text-[16px]  text-[#5F6D7E]'>Copy address to clipboard</span></div>
                <div className='font-bold text-[24px] md:text-[2.4rem]'><span>Add Social Media Accounts</span><Popover content={content4} ><Image src={exclaim_point} className='cursor-pointer ml-[0.3rem]' height={16} /></Popover></div>
                <div className='text-center text-[14px] md:text-[1.4rem] my-[20px] md:my-[4.1rem] '>By linking one or more of your social media accounts you can <span className='text-[#F4B512]'>Earn over 20 $Meow.</span></div>
                <div className='text-center'><Image className='mr-[24px]' src={x} height={48} width={48} ></Image><Image className='mr-[24px]' src={discord} height={48} width={48}></Image><Image src={email} height={48} width={48}></Image></div>
                <div className='bg-[#F4B512] w-[222px] h-[48px] text-[16px] font-bold text-[white] flex justify-center items-center mx-auto my-[41.6px] md:my-[4.16rem] cursor-pointer relative' onClick={() => { setOpen(true) }}>START<span className=' absolute top-[13px] right-[5px] text-right'><ArrowRightOutlined /></span></div>
                <Modal width={1104} open={open} onOk={() => { }} footer={null} maskClosable={false} onCancel={() => { setOpen(false) }}>
                    <div className=' font-bold text-[24px] md:text-[2.4rem] text-center'><span>Add Social Media Accounts</span><Popover content={content4} ><Image src={exclaim_point} className='cursor-pointer ml-[0.3rem]' height={16} /></Popover></div>
                    <div className='text-center text-[14px] md:text-[1.4rem] my-[10px] md:my-[1rem] '>By linking one or more of your social media accounts you can <span className='text-[#F4B512]'>Earn over 20 $Meow.</span></div>
                    <div className='flex ml-[207px] text-[16px] font-bold my-[10px]'><div className='w-[2px] h-[20px] bg-[#F4B512] mr-[5px]'></div>Select one or more Social Media Accounts</div>
                    <div className='ml-[207px]'><Image className='rounded-[50%] border-[2px] border-[#F4B512] border-solid mr-[10px]' src={x} width={48} height={48}></Image><Image className='rounded-[50%] border-[2px] border-[#F4B512] border-solid' src={discord} width={48} height={48}></Image></div>
                    <div className='w-[650px] px-[5px] py-[20px] border-[1px] border-[#EAEBF0] border-solid mx-auto '>
                        <div className='px-[10px] py-[10px] bg-[#E5E3E6] flex justify-between'>
                            <div className='flex items-center'>
                                <Image src={email} width={25} height={19}></Image>
                                <div className='ml-[5px]'>tobybob.eth@gamil.com</div>
                            </div>
                            <div className='text-[#F4B512]'>
                                Sent a Code
                            </div>
                        </div>
                        <div className='mt-[21px] mb-[10px]'>
                            <Input className='w-[44px] h-[44px] rounded-[5px] border-[black] mr-[12px]'></Input>
                            <Input className='w-[44px] h-[44px] rounded-[5px] border-[black] mr-[12px]'></Input>
                            <Input className='w-[44px] h-[44px] rounded-[5px] border-[black] mr-[12px]'></Input>
                            <Input className='w-[44px] h-[44px] rounded-[5px] border-[black] mr-[12px]'></Input>
                            <Input className='w-[44px] h-[44px] rounded-[5px] border-[black] mr-[12px]'></Input>
                            <Input className='w-[44px] h-[44px] rounded-[5px] border-[black]'></Input>
                        </div>
                        <div className='bg-[#F4B512] px-[35px] py-[10px] w-fit cursor-pointer text-[16px] text-[white] rounded-[5px]  font-bold'>Verify</div>

                    </div>
                    <div classname="text-[#272D37] bg-[red]">
                        <div className=' pl-[200px]'>Notice:</div>
                        <div className=' pl-[200px]'>1.One wallet address can link multiple social media accounts. </div>
                        <div className=' pl-[200px]'>2.To unlink a social media account, send a request, and the process will take 7 days.</div>
                    </div>
                    <div className='bg-[#F4B512] w-fit px-[35px] py-[10px] text-[white] mx-auto mt-[24px] rounded-[5px] font-bold'>CONFIRM</div>
                </Modal>
                <div className='flex justify-between my-[30px]'>
                    <div className='px-[10px] py-[10px] flex items-center bg-[#E5E3E6] w-[50%] rounded-[5px]'><Image src={x} width={24} height={24}></Image><div className='ml-[5px]'>@tobybob105045</div></div>
                    <div className='w-[150px]  py-[10px] bg-[#F25E53]  flex justify-center items-center  rounded-[5px] font-bold text-[white] cursor-pointer'><div onClick={remove}>REMOVE</div></div>
                    {/* <div className='w-[150px] py-[10px] bg-[#F4B512]  flex justify-center items-center  rounded-[5px] font-bold text-[white] cursor-pointer'><div onClick={add}>ADD  </div></div> */}
                </div>
                <div className='flex justify-between my-[30px]'>
                    <div className='px-[10px] py-[10px] flex items-center bg-[#E5E3E6] w-[50%] rounded-[5px]'><Image src={discord} width={24} height={24}></Image><div className='ml-[5px]'>@tobybob105045</div></div>
                    <div className='w-[150px]  py-[10px] bg-[#F25E53] flex justify-center items-center  rounded-[5px] font-bold text-[white] cursor-pointer'><div onClick={remove}>REMOVE</div></div>
                    {/* <div className='w-[150px] py-[10px] bg-[#F4B512]  flex justify-center items-center  rounded-[5px] font-bold text-[white] cursor-pointer'><div onClick={add}>ADD  </div></div> */}
                </div>
                <div className='flex justify-between my-[30px]'>
                    <div className='px-[10px] py-[10px] flex items-center bg-[#E5E3E6] w-[50%] rounded-[5px]'><Image src={x} width={24} height={24}></Image><div className='ml-[5px]'>@tobybob105045</div></div>
                    {/* <div className='w-[150px]  py-[10px] bg-[#F25E53] flex justify-center items-center  rounded-[5px] font-bold text-[white] cursor-pointer'><div onClick={remove}>REMOVE</div></div> */}
                    <div className='w-[150px] py-[10px] bg-[#F4B512]  flex justify-center items-center  rounded-[5px] font-bold text-[white] cursor-pointer'><div onClick={add}>ADD  </div></div>
                </div>
                <Modal title="Remove Social Media Accounts " maskClosable={false} open={rOpen} footer={null} onCancel={() => { setROpen(false) }}>
                    <div className='text-center'>Please confirm if you are certain about deleting this media account. Once</div>
                    <div className='text-center'>confirmed, the account will be deleted within the next 7 days.</div>
                    <div className='bg-[#F4B512] text-center text-[white] py-[10px] my-[8px] rounded-[5px] cursor-pointer'>Confirm</div>
                    <div className='border-[1px] border-[#EAEBF0] border-solid py-[10px] rounded-[5px] text-center font-bold cursor-pointer' onClick={() => { setROpen(false) }}>Cancel</div>
                </Modal>
                <Modal title="Remove Social Media Accounts " maskClosable={false} open={addOpen} footer={null} onCancel={() => { setROpen(false) }}>
                    <div className='text-center'>Please confirm if you are certain about deleting this media account. Once</div>
                    <div className='text-center'>confirmed, the account will be deleted within the next 7 days.</div>
                    <div className='bg-[#F4B512] text-center text-[white] py-[10px] my-[8px] rounded-[5px] cursor-pointer'>Confirm</div>
                    <div className='border-[1px] border-[#EAEBF0] border-solid py-[10px] rounded-[5px] text-center font-bold cursor-pointer' onClick={() => { setROpen(false) }}>Cancel</div>
                </Modal>
                <div className='md:flex md:justify-between mb-[32px]'>
                    <div className='px-[32px] py-[24px] border-solid border border-[#EAEBF0] rounded-[5px] mb-[32px] md:mb-[0px] md:w-[46%] box-border'>
                        <div className='mb-[24px] flex items-center text-[16px] text-[#272D37] font-bold'><Image src={MeowToken} className='cursor-pointer  mr-[0.6rem]' height={60} />  $ MEO <Popover content={content1} onClick={() => { window.open("https://meowprotocol.gitbook.io/doc/tokenomics/introduction", "_blank") }}><Image src={exclaim_point} className='cursor-pointer ml-[0.3rem]' height={16} /></Popover></div>
                        <div className='text-[22px] font-bold'>{loading ? "" : data.token}</div>
                    </div>
                    <div className='px-[32px] py-[24px] border-solid border border-[#EAEBF0] rounded-[5px] md:w-[46%] box-border'>
                        <div className='mb-[24px] flex items-center text-[16px] text-[#272D37] font-bold'><Image src={MeowToken} className='cursor-pointer   mr-[0.6rem]' height={60} />  $ Meow <Popover content={content2} onClick={() => { window.open("https://meowprotocol.gitbook.io/doc/meow-reputation-system/introduction", "_blank") }}><Image src={exclaim_point} className='cursor-pointer ml-[0.3rem]' height={16} /></Popover></div>
                        <div className='text-[22px] font-bold'>{loading ? "" : data.integral}</div>
                    </div >
                </div>
                <div className='box-border border-solid border p-[32px] border-[#EAEBF0] rounded-[5px] mb-[32px]'>
                    <div className='md:flex md:justify-between md:items-end mb-[16px]'>
                        <div className='text-[24px] font-bold mb-[12px] '>Invite My Friends <Popover content={content3}><Image src={exclaim_point} className='cursor-pointer' height={16} /></Popover></div>
                        <div className='text-[16px] font-bold'>My Invited Number: <span className='text-[#F4B512]'>{loading ? "" : data.inviteNumber}</span></div>
                    </div>
                    <div className='mb-[32px] md:flex md:mb-[2.4rem]'><Input className='md:mr-[2.3rem] mb-[26px] md:mb-[0px]' value={loading ? "" : data.inviteCode} readOnly></Input> <span className='md:box-border bg-[#F4B512] px-[20px] py-[12px] md:w-[11.9rem] min-[1px]:inline  rounded-[6px] text-[white] font-semibold cursor-pointer  md:text-[1.4rem] text-[14px] border-none' onClick={copy_link}>Copy Link</span></div>
                    <div className='text-[16px] text-[#5F6D7E]'>Copy the link above to start inviting friends</div>
                </div>

                <div className='p-[32px] md:h-[71rem] border-solid rounded-[0.5rem]  border-[#EAEBF0] mb-[1.2rem]' >
                    <div className='md:flex md:justify-between md:items-end mb-[16px]'>
                        <div className=' text-[24px]   font-bold mb-[10px] mdLmb-[10px]'>Monthly $Meow Earning Ranking</div>
                        <div className='text-[16px] font-bold'>My Monthly $Meow Earning: <span className='text-[#F4B512]'>{loading ? "" : data.monthIntegral}</span></div>
                    </div>
                    <div className='hidden md:flex justify-between text-[#5F6D7E] text-[1.6rem]  h-[4.4rem]  border-solid border-x-0 border-t-0  border-b-1 border-[#EAEBF0] '>
                        <div className='basis-[13%]'>Number</div>
                        <div className='basis-[80%] whitespace-nowrap '>Wallet Address</div>
                        <div className='basis-[6.7%]'>Quantity</div>
                    </div>


                    <div className='hidden md:block overflow-y-auto h-[55.2rem] no_scroll'>
                        {loading ? "" : data.top50.map((item, index) => (
                            <div className={' flex justify-between items-center h-[7.2rem] box-border   border-solid border-x-0 border-t-0  border-b-1 border-[#EAEBF0] text-[1.6rem] font-bold ' + (item.Address.toLowerCase() == address.toLowerCase() ? "bg-[#F4B512]/[0.3]" : "")}>
                                <div className='basis-[13%] text-[#3d331b]'>{index + 1}</div>
                                <div className='basis-[80%] flex items-center'>
                                    <Blockies className='w-[4.8rem] h-[4.8rem] rounded-[50%] bg-[#F4B5121A] mr-[1.2rem]' seed={item.Address.toLowerCase()} size={10} scale={4} />
                                    <div className={item.Address.toLowerCase() == address.toLowerCase() ? "text-[#F4B512]" : ""}>{item.Address.slice(0, 6) + "..." + item.Address.slice(-4)}</div>
                                </div>
                                <div className={item.Address.toLowerCase() == address.toLowerCase() ? " text-right basis-[6.7%] text-[#F4B512]" : "  text-right basis-[6.7%]"}>{item.Quantity}</div>
                            </div>
                        ))}
                    </div>
                    <div className='md:hidden  h-[600px] overflow-auto '>
                        {loading ? "" : data.top50.map((item, index) => (
                            <div className='py-[16px]  border-solid boder-1 border-[white] border-t-[#EAEBF0]'>
                                <div className='flex'>
                                    <div className='w-[65px]'>
                                        <div className='text-[12px] text-[#5F6D7E]'>{index + 1}</div>
                                        {/* <div className='text-[16px] text-[#F4B512]'>1</div> */}
                                    </div>
                                    <div>
                                        <div className='text-[12px] text-[#5F6D7E]'>Wallet Address</div>
                                        <div className='text-[16px] flex items-center'>
                                            {/* <div className='w-[48px] h-[48px] bg-[#F4B512] mr-[12px] rounded-[50%]' ></div> */}
                                            <Blockies className='w-[4.8rem] h-[4.8rem] rounded-[50%] bg-[#F4B5121A] mr-[1.2rem]' seed={item.Address.toLowerCase()} size={8} scale={4} />
                                            <div className={item.Address.toLowerCase() == address.toLowerCase() ? 'text-[16px] font-bold text-[#F4B512]' : 'text-[16px] font-bold'}>{item.Address.slice(0, 6) + "..." + item.Address.slice(-4)}</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-[12px] text-[#5F6D7E] mt-[16px]'>Quantity</div>
                                    <div className={item.Address.toLowerCase() == address.toLowerCase() ? 'text-[16px] font-bold text-[#F4B512]' : 'text-[16px] font-bold'}>{item.Quantity}</div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className='hidden md:block text-[1.6rem] text-[#5F6D7E]'>Display up to 50 lines</div>
                    <div className='md:hidden md:block text-[12px] text-[#5F6D7E]'>Display up to 50 lines</div>
                </div>
                {/* {chainId==goerli.id?<div>
                <div className='flex justify-center items-center '><div className=' w-[300px] md:w-[30rem] md:text-[1.4rem] text-[14px] font-bold text-[#F4B512] px-[20px] py-[12px] box-border border-solid border  border-[#EAEBF0] rounded-[5px] mb-[0.8rem] p-[1rem] border-[2px]'>Rewards You Are Eligible: <span className='md:text-[1.4rem] text-[14px] text-[#000000]'>{userReward==""? "0" : userReward} $USDC</span></div></div>
                <div className="flex justify-center items-center"><span className='w-[260px] md:w-[30rem] md:box-border bg-[#F4B512] px-[20px] py-[12px]  min-[1px]:inline  rounded-[6px] text-[white] font-semibold cursor-pointer  md:text-[1.4rem] text-[14px] border-none text-center' onClick={claimReward}>Claim Reward</span></div>
                </div>
                :<div>
                <div className='flex justify-center items-center '><div className=' w-[300px] md:w-[30rem] md:text-[1.4rem] text-[14px] font-bold text-[#F4B512] px-[20px] py-[12px] box-border border-solid border  border-[#EAEBF0] rounded-[5px] mb-[0.8rem] p-[1rem] border-[2px]'>Please change network to Scroll !</div></div>
                <div className="flex justify-center items-center"><span className='w-[260px] md:w-[30rem] md:box-border bg-[#F4B512] px-[20px] py-[12px]  min-[1px]:inline  rounded-[6px] text-[white] font-semibold cursor-pointer  md:text-[1.4rem] text-[14px] border-none text-center' onClick={()=>{switchChain({chainId:goerli.id})}}>Change Network</span></div>
                </div>} */}
                <div className='flex justify-center items-center '><div className=' w-[300px] md:w-[30rem] md:text-[1.4rem] text-[14px] font-bold text-[#F4B512] px-[20px] py-[12px] box-border border-solid border  border-[#EAEBF0] rounded-[5px] mb-[0.8rem]  border-[2px]  text-center'>Rewards You Are Eligible: <span className='md:text-[1.4rem] text-[14px] text-[#000000] inline-block'>{userReward == "" ? "0" : userReward} $USDC</span><Popover content={"You must complete the claim before April 27, 2024."} ><Image src={exclaim_point} className='cursor-pointer ml-[0.3rem]' height={16} /></Popover></div></div>
                {userReward == "0" ? <div className="flex justify-center items-center"><button className='w-[260px] md:w-[30rem] md:box-border bg-[#F4B512]/[0.6] px-[20px] py-[12px]  min-[1px]:inline  rounded-[6px] text-[white] font-semibold cursor-pointer  md:text-[1.4rem] text-[14px] border-none text-center' onClick={claimReward} disabled={true}>Claim Reward</button></div> : <div className="flex justify-center items-center"><span className='w-[260px] md:w-[30rem] md:box-border bg-[#F4B512] px-[20px] py-[12px]  min-[1px]:inline  rounded-[6px] text-[white] font-semibold cursor-pointer  md:text-[1.4rem] text-[14px] border-none text-center' onClick={claimReward}>Claim Reward</span></div>}
            </div> : <div className=' text-center h-[40rem]'>
                <div className='mt-[20rem] font-bold md:text-[2.4rem] mb-[6.4rem] text-[20px]'>Please,connect your wallet</div>
                <ConnectButton.Custom>
                    {({
                        account,
                        chain,
                        openAccountModal,
                        openChainModal,
                        openConnectModal,
                        authenticationStatus,
                        mounted,
                    }) => {
                        // Note: If your app doesn't use authentication, you
                        // can remove all 'authenticationStatus' checks

                        const ready = mounted && authenticationStatus !== 'loading';
                        const connected =
                            ready &&
                            account &&
                            chain &&
                            (!authenticationStatus ||
                                authenticationStatus === 'authenticated');

                        return (
                            <div
                                {...(!ready && {
                                    'aria-hidden': true,
                                    'style': {
                                        opacity: 0,
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                    },
                                })}
                            >
                                {(() => {
                                    if (!connected) {
                                        return (
                                            <button onClick={openConnectModal} type="button" className={button_style}>
                                                Connect Wallet
                                            </button>
                                        );
                                    }

                                    if (chain.unsupported) {
                                        return (
                                            <button onClick={openChainModal} type="button" className={button_style}>
                                                Wrong network
                                            </button>
                                        );
                                    }

                                    return (
                                        <Popover content={content}>
                                            <div style={{ display: 'flex', gap: 12 }}>

                                                <button type="button" className={button_style}>
                                                    {account.displayName}

                                                </button>
                                            </div>
                                        </Popover>
                                    );
                                })()}
                            </div>
                        );
                    }}
                </ConnectButton.Custom>
                {/* <button className='md:hidden box-border bg-[#F4B512] w-[123px] h-[46px] rounded-[6px] text-[white] font-semibold cursor-pointer text-[15px] border-none'>Connect wallet</button> */}
            </div>
            }
            <Footer></Footer>
        </div >
    )
}