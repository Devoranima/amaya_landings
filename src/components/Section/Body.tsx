import classNames from 'classnames'

export default function Body(props : MyComponentProps) {
  return (
    <div className={classNames('container relative w-full', props.className)}>
      {props.children}
    </div>
  )
}
