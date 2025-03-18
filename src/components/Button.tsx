import React from "react"
import { ButtonProps } from "./types"

const AddButton: React.FC<ButtonProps & { isHovered?: boolean }> = ({
  href,
  target = '_self',
  label,
  classes = '',
  isHovered = false,
}) => {

  const buttonSize = isHovered ? "px-5" : "";


  if (href) {
    return (
      <a href={href} target={target} className={`add-btn${buttonSize} ${classes}`}>
        {label}
      </a >
    )
  } else {
    return (
      <button className={`add-btn ${buttonSize} ${classes}`}>
        {label}
      </button>
    )
  }
}


const OurMenuButton: React.FC<ButtonProps & { isHovered?: boolean }> = ({
  href,
  target = '_self',
  label,
  classes = '',
  isHovered = false,
}) => {

  const buttonSize = isHovered ? "px-2" : "";


  /*if (href) {
    return (
      <a href={href} target={target} className={`btn${buttonSize} ${classes}`}>
        {label}
      </a >
    )
  } else {*/
  return (
    <button className={`btn ${buttonSize} ${classes}`}>
      <a href={href} target={target} >{label}</a>
    </button>
  )
}


export { AddButton, OurMenuButton }