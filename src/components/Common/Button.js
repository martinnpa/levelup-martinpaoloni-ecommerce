import React, { useEffect, useState } from 'react'

const Button = ({disabled, className = '', onClick, children, filled, color = 'secundary'}) => {

  //use this object because tailwind does not support dynamic classNames ex: bg-${styleColor}
  let colorButton = {};
  if (filled) {
      colorButton = {
        default: 'text-primary',
        'secundary': 'bg-secundary border-secundary hover:bg-transparent',
        'primary': 'bg-primary text-primary-on hover:text-primary hover:bg-transparent border-primary',
        'secundary-lilac': 'bg-secundary-lilac border-secundary-lilac hover:bg-transparent',
        'secundary-alt': 'bg-secundary-alt border-secundary-alt hover:bg-transparent'
      }
  } else {
      colorButton = {
        default: 'text-primary',
        'primary': 'border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-on',
        'secundary': 'border-secundary hover:bg-secundary bg-transparent hover:text-primary text-secundary',
        'secundary-alt': 'border-secundary-alt hover:bg-secundary-alt bg-transparent hover:text-primary text-secundary-alt',
        'secundary-lilac': 'border-secundary-lilac hover:bg-secundary-lilac bg-transparent hover:text-primary text-secundary-lilac',
      }
  }

  return (
    <button
        disabled={disabled}
        onClick={onClick}
        className={`${colorButton[color]} flex content-center justify-center px-4 border disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
        {children}
    </button>
  )
}
export default Button