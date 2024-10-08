import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import classNames from "classnames";

interface MyButtonProps extends MyComponentProps{
  customPaddingX?: boolean,
  customSize?: boolean
}

export default function CTA(props: MyButtonProps) {
  return (
    <a className={
      classNames('h-fit relative block bg-[#fe9539] hover:bg-[#ff8923] rounded-full outline outline-4 hover:text-gray-200  text-white text-center font-sans pt-2 pb-4 2xl:pt-4 2xl:pb-7', props.className, {["px-20 lg:px-40"] : !props.customPaddingX}, {["text-4xl 2xl:text-5xl"] : !props.customSize})
      }>
      {props.children}
      <MdOutlineKeyboardArrowRight  className='absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 text-white text-6xl font-black'/>
    </a>
  )
}
