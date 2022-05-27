import React from 'react';

const H1 = ({children, className= ''}) => {
  return (
    <h1 className={`${className} text-2xl font-light`}>{children}</h1>
  )
}

export default H1;