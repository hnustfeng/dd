import React from 'react'
import Image from 'next/image';
import fire from "../public/fire.png"
import { DoubleRightOutlined, FireFilled } from '@ant-design/icons'
import { color } from 'framer-motion';

export default function Card({ img, appName, content, url, isFire, isHighLight }) {
    return (
        <div onClick={() => { window.open(url) }} className={isHighLight?'p-[20px] md:p-[3rem]  border   shadow-xl md:w-[22rem] md:h-[22rem] h-[200px] relative cursor-pointer bg-[#F4B512]/[0.4]':'p-[20px] md:p-[3rem]  border   shadow-xl md:w-[22rem] md:h-[22rem] h-[200px] relative cursor-pointer'}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center '>
                    <Image src={img} className='w-[40px] h-[40px] mr-[10px] md:mr-[1rem] md:w-[4rem] md:h-[4rem]'></Image>
                    <span className='text-[16px] md:text-[1.6rem]'>{appName}</span>
                </div>
                {/* <div><Image src={fire} className='w-[20px]  h-[30px] mr-[10px] md:mr-[1rem]'></Image></div> */}
                {isFire ? <FireFilled className='w-[20px]  h-[30px] mr-[10px] md:mr-[1rem] md:w-[2rem] md-[3rem] ' style={{ color: "#F4B512", fontSize: '20px' }} /> : ""}
            </div>
            <div className='text-[13px] my-[2rem] md:text-[1.6rem]'>{content}</div>
            {/* <div className='absolute right-[2rem] bottom-[2rem] text-[20px] md:text-[1.8rem] font-bold cursor-pointer text-[red]' onClick={() => { window.open(url) }}>{">>"}</div> */}
            <DoubleRightOutlined className='absolute right-[2rem] bottom-[2rem] text-[20px] md:text-[1.8rem] font-bold cursor-pointer text-[#F4B512]' />
        </div>
    )
}
