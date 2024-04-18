import React from 'react'
import Card from "../components/Card.jsx"
import S from "../public/scroll.jpg"
import Orbiter from "../public/orbiter.png"
import Squid from "../public/squid.png"
import Symbiosis from "../public/sys.png"
import Xy from "../public/xy.png"
import O from "../public/owlta.jpg"
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Brige() {
    return (
        <div className='h-screen '>
            <Header></Header>
            <div className='mt-[20px] px-[30px] py-[30px] md:py-[2rem]  md:px-[11.2rem]'>
                <div className='mb-[2rem]'>
                    <div className='text-[20px] md:text-[2rem] font-bold mb-[1rem]'>Bridge</div>
                    <div className='text-[16px] md:text-[1.6rem]'>Bridge your assets from other blockchains and embark on a journey with multi-chain interoperability.</div>
                </div>
                <hr />
                <div className='md:flex '>
                <div className='md:basis-1/5 mx-[1px] my-[2rem] md:mr-[8.5rem]'>
                        <Card img={O} appName={"Owlto"} url="https://owlto.finance/?ref=0x9A9b7CE86946717aF2404FF699a177e4f14F8a73/" content={`Owlto is a decentralized Cross-Rollup bridge. Providing 'safe, fast, cheap, and easy-to-use' services.`} isFire={true} isHighLight={true}></Card>
                    </div>
                    <div className='md:basis-1/5 mx-[1px] my-[2rem] md:mr-[8.5rem]'>
                        <Card img={S} appName={"Scroll"} url="https://scroll.io/bridge" content={"Scroll's official bridge that cansecurely bridge Ethereum's nativeassets in the safest way possible."}></Card>
                    </div>
                    {/* <div className='md:basis-1/5 mx-[1px] my-[2rem] md:mr-[8.5rem]'>
                    <Card img={Squid} appName={"Squid"} url="https://www.baidu.com" content={"Squid allows any token to beswapped between blockchains, andunlocks access to apps acrosschains in a single click."}></Card>
                </div>
                <div className='md:basis-1/5 mx-[1px] my-[2rem]'>
                    <Card img={Symbiosis} appName={"Symbiosis"} url="https://www.baidu.com" content={"Symbiosis is a cross-chain AMMDEX. You can easily swap any tokenand move your assets acrossdifferent networks."}></Card>
                </div> */}
                    {/* <div className='md:flex'>
                    <div className='md:basis-1/5 mx-[1px] my-[2rem] md:mr-[8.5rem]'>
                        <Card img={Xy} appName={"XY Finance"} url="https://www.baidu.com" content={"XY Finance is a cross-chain dex 8bridge aggregator that operates on20 EVM chains including Linea.zkSync Era, Base. Mantle.Arbitrum.Optimism, Polygon & more."}></Card>
                    </div>
                </div> */}
                </div>


            </div>
            <Footer></Footer>
        </div>
    )
}
