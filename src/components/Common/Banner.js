import React, { useState, useEffect } from 'react';
import { XIcon } from '@heroicons/react/outline';

const Banner = (props) => {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    sessionStorage.banner = 'true';
    setClosed(true);
  }

  useEffect(() => {
    if (sessionStorage.banner) {
      let flag = JSON.parse(sessionStorage.banner);
      setClosed(flag);
    }
  }, [])

  if (closed) return false;

  return (
    <div className="w-full block text-center bg-secundary-lilac text-primary-dark p-1 text-xs md:text-base">
      {props.children}
      <button onClick={handleClose} className="w-5 h-5 absolute right-4 top-1"><XIcon/></button>
    </div>
  )
}

export default Banner