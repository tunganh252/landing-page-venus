import Image from 'next/image'
import React from 'react'
import btnDownApple from "@assets/img/download_apple.png"
import btnDownAndroid from "@assets/img/download_android.png"
import Link from 'next/link'

type Props = {
    type: "apple" | "android"
}

export default function BtnDowload(props: Props) {
    return (
        <div className="w-full h-full">
            <a href={"https://google.com"} >
                <Image src={props.type === "apple" ? btnDownApple : btnDownAndroid} alt="btn-dowload" objectFit="contain" />
            </a>
        </div>
    )
}
