import { LINK_DOWLOAD_ANDROID, LINK_DOWLOAD_APPLE } from '@/assets/utils/constant'
import btnDownAndroid from "@assets/img/download_android.png"
import btnDownApple from "@assets/img/download_apple.png"
import Image from 'next/image'

type Props = {
    type: "apple" | "android"
}

export default function BtnDowload(props: Props) {
    return (
        <div className="w-full h-full hover:border-white border-transparent border-2 box-border transition rounded-3xl">
            <a href={props.type === "apple" ? LINK_DOWLOAD_APPLE : LINK_DOWLOAD_ANDROID} target="_blank">
                <Image src={props.type === "apple" ? btnDownApple : btnDownAndroid} alt="btn-dowload" />
            </a>
        </div>
    )
}
