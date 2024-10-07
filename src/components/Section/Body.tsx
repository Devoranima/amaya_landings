import classNames from 'classnames'
import React from 'react'
export default function Body(props : MyComponentProps) {
  return (
    <div className={classNames('container relative w-full', props.className)}>
      {props.children}
    </div>
  )
}
