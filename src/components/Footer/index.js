import React, { useContext } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { generalContext } from 'context';
import { Switch } from '@headlessui/react'

const Footer = () => {

  const { tecoMode, handleTecoMode } = useContext(generalContext);

  return (
    <footer className="bg-primary-dark py-2 absolute bottom-0 w-full">
      <div className="container flex justify-between items-center">
        <div className="text-left">

        <Switch.Group>
          <div className="flex items-center">
            <Switch.Label className="mr-3 text-xs">modo Teco</Switch.Label>
            <Switch
              checked={tecoMode}
              onChange={handleTecoMode}
              className={`${
                tecoMode ? 'bg-secundary' : 'bg-gray-200'
              } relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span
                className={`${
                  tecoMode ? 'translate-x-4' : 'translate-x-1'
                } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
        {/* <button onClick={handleTecoMode}>Modo Teco</button> */}
        </div>

        <p className="text-right text-xs">Made with hunger and love <HeartIcon className="w-3 h-3 inline-block"/> </p>
      </div>
    </footer>
  )
}

export default Footer