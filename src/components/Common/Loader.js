import React from 'react';
import {CodeIcon} from '@heroicons/react/outline';

const Loader = () => {
  return (
    <div className="fixed z-40 flex flex-col justify-center w-full h-full place-items-center bg-primary">
      <CodeIcon className="w-10 h-10 animate-bounce"/>
      <p className="animate-pulse">Cargando...</p>
    </div>
  )
}

export default Loader