import React from 'react'

const Button = ({disabled, className = '', onClick, children}) => {
  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={`${className} flex content-center justify-center px-4 border-secundary border text-secundary disabled:opacity-50 hover:bg-secundary hover:text-primary disabled:cursor-not-allowed`}>
      {children}
    </button>
  )
}

export default Button