import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from "../../public/logo.png"
import Blockies from 'react-blockies';
import { Popover, message } from "antd"
import { useDisconnect, useAccount } from 'wagmi'
import Eth from "../../public/eth.png"
import Scroll from "../../public/scroll.png"
import {
    CopyFilled,
    DownOutlined
} from '@ant-design/icons';
import { EthereumCode, ScrollCode, EthereumScan, ScrollScan } from '../../utils/constants';
import { post } from '../../utils/funcaxios';
import { useConnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useConnect as useParticleConnect, useUserInfo } from '@particle-network/auth-core-modal';
import { particleWagmiWallet } from '../particleWallet/particleWagmiWallet';

function Header({ isHome = true, setToken, isDashBoard = false, isOpen = false }) {
    const web3ModalRef = useRef();
    const { disconnect } = useDisconnect()
    const { address, isConnecting, isDisconnected, isConnected, chain } = useAccount()
    const button_style = 'box-border bg-[#F4B512] w-[12.3rem] h-[4.6rem] rounded-[0.6rem] text-[white] font-semibold cursor-pointer text-[1.5rem] border-none';
    const [show, setShow] = useState(false);
    const [connectTest, setConnectTest] = useState();
    const router = useRouter()
    const [yshow, setYshow] = useState(false);
    const [open, setOpen] = useState(false)

    const { connect } = useConnect();
    const { connectionStatus } = useParticleConnect();
    const { userInfo } = useUserInfo();

    const copy_address = () => {
        navigator.clipboard.writeText(address).then(() => {
            message.success("copy success!");
        })
    }
    const redirectToExternalPage = () => {
        window.open((chain.id == EthereumCode ? EthereumScan : ScrollScan) + "/address/" + address)
    };

    useEffect(() => {
        if (address) {
            post("/auth", { "address": address }).then((res) => {
                sessionStorage.setItem('token', "Bearer " + res.data.token)
                if (isDashBoard) {
                    setToken("Bearer " + res.data.token)
                }
            })
        }
    }, [address])

    useEffect(() => {
        if (isOpen) {
            setOpen(true)
        }
    }, [isOpen])

    useEffect(() => {
        // console.log(">>>>>>>>>>>", connectionStatus);

        if (
            connectionStatus === 'connected' &&
            userInfo &&
            userInfo?.thirdparty_user_info?.provider !== 'email' &&
            userInfo?.thirdparty_user_info?.provider !== 'phone' &&
            userInfo?.thirdparty_user_info?.provider !== 'jwt'
        ) {
            connect({
                connector: particleWagmiWallet({ socialType: userInfo?.thirdparty_user_info?.provider }),
            });
        }
    }, [userInfo, connect, connectionStatus]);

    const market = () => (<div className='w-[18rem] font-bold'>
        <div className='cursor-pointer flex items-center mb-[1.5rem] text-[1.2rem]' onClick={() => { router.push("EthMarket") }}><Image src={Eth} style={{ width: 'auto', maxHeight: '3rem' }} className='mr-[20px]'></Image> Ethereum Market</div>
        <div className='cursor-pointer flex items-center text-[1.2rem]' onClick={() => { router.push("ScrollMarket") }}><Image src={Scroll} style={{ width: 'auto', maxHeight: '3rem' }} className='mr-[20px]'></Image>Scroll Market</div>
    </div>)
    const content = (conn) => (
        <div className='box-border  pt-[22px] pr-[20px] pb-[21px] pl-[21px]'>
            <div className='flex justify-between items-center  '>
                <div ><Blockies className=' h-[80px] rounded-[50%] ' seed={address ? address.toLowerCase() : ""} size={14} scale={4} /></div>
                <div className='   flex justify-between  items-center  h-[22px]'>
                    <div className='font-medium text-[18px]'>{address && (address.slice(0, 6) + "..." + address.slice(-4))}</div>
                    <div ><CopyFilled className='w-[15px] h-[15px] cursor-pointer' onClick={copy_address} /></div>
                </div>
            </div>
            <div className='flex  justify-between  w-[244px] h-[28px] mt-[12px] mb-[24px] text-[#5F6D7E] text-center text-[14px] font-medium'>
                <div onClick={() => { disconnect() }} className=' cursor-pointer  w-[108px] border border-solid border-[#EAEBF0] rounded-[2px]'>DISCONNECT</div>
            </div>
            <div className='text-[16px]'>
                <div className='h-[22px] mb-[16px] font-medium text-[#272D37] cursor-pointer' onClick={() => { router.push("/Profile") }}> My profile</div>
                <div className='h-[1px] bg-[#EAEBF0] mb-[16px]'></div>
                <div className='font-medium text-[14px] text-[#5F6D7E] mb-[6px]'>Network</div>
                <div className='w-[85px] flex items-center justify-between mb-[16.5px] text-[#272D37] font-medium '><div className='w-[6px] h-[6px] rounded-[50%] bg-[#28DD24]'></div>{chain && chain.name || " "}</div>
                <div className='h-[1px] bg-[#EAEBF0] mb-[24px]'></div>
                <div className='font-medium text-[#272D37] cursor-pointer' onClick={redirectToExternalPage}>View on Explorer</div>
            </div>
        </div>
    );
    return <div className='box-border  h-[8.6rem] py-[2rem] px-[6rem]'>
        <div className='flex justify-between px-[3.2rem] h-full'>
            <div className='hidden md:flex  justify-between font-semibold  text-[1.5rem] items-center w-[80rem] '>
                <div><Image src={logo} style={{ height: '90%', width: '67%' }}  ></Image></div>
                <div className={router.pathname.includes("Home") ? 'active cursor-pointer' : "cursor-pointer"} onClick={() => { router.push("/Home") }}>Home</div>
                <div className={router.pathname.includes("Dashboard") ? 'active cursor-pointer' : "cursor-pointer"} onClick={() => { router.push("/Dashboard") }}>Dashboard</div>
                <div className={router.pathname.includes("Market") ? 'active cursor-pointer' : "cursor-pointer"} ><Popover placement="top" content={market}>Market <DownOutlined /></Popover></div>
                <div className={router.pathname.includes("Bridge") ? 'active cursor-pointer' : "cursor-pointer"} onClick={() => { router.push("/Bridge") }}>Bridge</div>
                <div className='cursor-pointer' onClick={() => { window.open("https://meowprotocol.gitbook.io/doc/", "_blank") }}>Docs</div>
                <div className='cursor-pointer' onClick={() => { window.open("https://f8t2x8b2.rocketcdn.me/wp-content/uploads/2023/12/VAR-0xMeowProtocol-231127-V2.pdf", "_blank") }}>Security</div>
            </div>
            <div className='hidden md:block'>  {!isHome ? <button onClick={() => { router.push("/Dashboard") }} type="button" className={button_style}>Launch APP</button>
                : <ConnectButton.Custom>
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

                                    // if (chain.unsupported) {
                                    //     return (
                                    //         <button onClick={openChainModal} type="button" className={button_style}>
                                    //             {account.displayName}
                                    //         </button>
                                    //     );
                                    // }

                                    return (
                                        <Popover content={content(openConnectModal)}>
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
                </ConnectButton.Custom>}</div>
        </div>
        <div className='md:hidden flex  justify-between'>
            <div><Image src={logo} style={{ height: '100%', width: '61%' }} ></Image></div>
            <div className=' text-[20px] cursor-pointer' onClick={() => { setShow(!show) }}>{show ? "X" : "三"}</div>
        </div>
        {
            show ?
                <div className='w-[100%] bg-[white]  relative z-40'>
                    <div className='p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer' onClick={() => { router.push("/Home"); setShow(false) }}>Home</div>
                    <div className='p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer' onClick={() => { router.push("/Dashboard"); setShow(false) }}>Dashboard</div>
                    <div className='p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer' onClick={() => { setYshow(!yshow) }}>Market <DownOutlined className='ml-[10px]' /></div>
                    <div className={yshow ? " p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer" : "hidden"} onClick={() => { router.push("/EthMarket"); setShow(false) }}>Ethereum Market</div>
                    <div className={yshow ? "p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer" : "hidden"} onClick={() => { router.push("/ScrollMarket"); setShow(false) }}>Scroll Market</div>
                    <div className='p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer' onClick={() => { router.push("/Bridge"); setShow(false) }}>Bridge</div>
                    <div className='p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer' onClick={() => { window.open("https://meowprotocol.gitbook.io/doc/", "_blank"); setShow(false) }}>Docs</div>
                    <div className='p-[16px] font-bold text-[15px] boredr border-solid border-[transparent] border-b-[#EAEBF0] cursor-pointer' onClick={() => { window.open("", "_blank"); setShow(false) }}>Security</div>
                    {!isHome ? <div className='text-center'><button onClick={() => { router.push("/Dashboard") }} type="button" className="px-[18px] py-[12px] bg-[#F4B512] border-none rounded-[6px] text-[white] cursor-pointer m-auto">Launch APP</button></div>
                        : <div className='p-[16px]' onClick={() => { setShow(true) }}><div>
                            {!isConnected ? <div className='text-center'><button onClick={() => setOpen(true)} type="button" className="px-[18px] py-[12px] bg-[#F4B512] border-none rounded-[6px] text-[white] cursor-pointer m-auto">Connect Wallet</button></div>
                                : <ConnectButton.Custom>
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
                                                            <button onClick={openConnectModal} type="button" className="px-[18px] py-[12px] bg-[#F4B512] border-none rounded-[6px] text-[white] cursor-pointer m-auto">
                                                                Connect Wallet
                                                            </button>
                                                        );
                                                    }

                                                    // if (chain.unsupported) {
                                                    //     return (
                                                    //         <button onClick={openChainModal} type="button" className={button_style}>
                                                    //             {account.displayName}
                                                    //         </button>
                                                    //     );
                                                    // }

                                                    return (
                                                        <Popover content={content(openConnectModal)}>
                                                            <div style={{ display: 'flex', gap: 12 }}>

                                                                <button type="button" className="px-[18px] py-[12px] bg-[#F4B512] border-none rounded-[6px] text-[white] cursor-pointer m-auto">
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
                            }
                        </div></div>}

                </div> :
                <></>

        }
    </div >
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['header']),
    },
})

export default Header