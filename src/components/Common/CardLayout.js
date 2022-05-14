import React from 'react'

const CardLayout = ({children}) => {
  return (
    <div className="px-2 py-5 bg-primary-light">
      {children}
    </div>
  )
}

export default CardLayout