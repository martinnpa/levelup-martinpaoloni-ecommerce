import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import Button from 'components/Common/Button';

const FormCheckout = () => {

  const [error, setError] = useState("");

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleOnBlur = (e) => {
    setBuyer({
      ...buyer,
    [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!error){}
  }

  useEffect(() => {
    console.log(buyer);
  }, [buyer])

  let style = `
  block w-full bg-transparent rounded-sm
  border-b border-primary text-primary-on
  mb-4 py-2 px-2 leading-2
  placeholder:italic
  focus:shadow-inner focus:bg-black/40 focus:shadow-black
  focus:outline-0 focus:border-0
  focus-visible:outline-0`;

  return (
    <>
      <form onSubmit={handleOnSubmit} className="w-full">
        <H1 className="text-center mb-8">Completa tu orden</H1>
        <input type="text" name="name" placeholder="Nombre" onBlur={handleOnBlur} className={`${style}`}/>
        <input type="phone" name="phone" placeholder="Teléfono" onBlur={handleOnBlur} className={`${style}`}/>
        <input type="email" name="email" placeholder="Email" onBlur={handleOnBlur} className={`${style}`}/>
        <Button type="submit" className="block w-full py-2 mt-8" filled>Realizar compra</Button>
      </form>
    </>
  )
}

export default FormCheckout;