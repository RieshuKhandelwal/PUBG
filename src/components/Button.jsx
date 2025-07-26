"use client"

import { soundManager } from "../utils/soundManager"

// Simple utility function to combine classes
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

const Button = ({ id, title, leftIcon, rightIcon, containerClass, onClick, ...props }) => {
  const handleMouseEnter = () => {
    soundManager.play("button")
  }

  const handleClick = (e) => {
    soundManager.play("sciFi4")
    if (onClick) onClick(e)
  }

  return (
    <button
      id={id}
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black transition-all duration-300 ease-in-out hover:scale-105",
        containerClass,
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {leftIcon && <span className="relative inline-flex shrink-0 overflow-hidden text-xs">{leftIcon}</span>}
      {title && <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">{title}</span>}
      {rightIcon && <span className="relative inline-flex shrink-0 overflow-hidden text-xs">{rightIcon}</span>}
    </button>
  )
}

export default Button
