import classNames from "classnames";

export default function Header(props: MyComponentProps) {
  return (
    <h1 className={classNames("w-full text-center font-fut", props.className)}>{props.children}</h1>
  )
}
