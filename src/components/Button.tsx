import React from "react"
import Link from "next/link";
import { ButtonProps } from "./types"

const AddButton: React.FC<ButtonProps & { isHovered?: boolean }> = ({
  label,
  classes = '',
  isHovered = false,
}) => {

  const buttonSize = isHovered ? "px-5" : "";

  return (
    <Link href="/create">
      <button className={`add-btn ${buttonSize} ${classes}`}>
        {label}
      </button>
    </Link>
  )
}


const OurMenuButton: React.FC<ButtonProps & { isHovered?: boolean }> = ({
  href,
  target = '_self',
  label,
  classes = '',
  isHovered = false,
}) => {

  const buttonSize = isHovered ? "px-2" : "";

  return (
    <button className={`btn ${buttonSize} ${classes}`}>
      <a href={href} target={target} >{label}</a>
    </button>
  )
}


export { AddButton, OurMenuButton }