import classNames from "classnames";
export default function Section( props:MyComponentProps) {
  return (
    <div 
      className={classNames("text-main flex flex-col items-center relative", props.className)}
    >
      {props.children}
    </div>
  )
}
