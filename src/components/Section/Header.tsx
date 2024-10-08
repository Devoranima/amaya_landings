import classNames from "classnames";

interface MyHeaderProps extends MyComponentProps {
  customTextSize?: boolean
}

export default function Header(props: MyHeaderProps) {
  return (
    <h1 className={classNames("w-full text-center font-fut", props.className, {["text-2xl lg:text-4xl"]:!props.customTextSize})}>{props.children}</h1>
  )
}
