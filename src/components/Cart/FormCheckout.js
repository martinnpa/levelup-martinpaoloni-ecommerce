import React, { useContext, useEffect, useState } from 'react';

const FormCheckout = () => {

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
  }

  useEffect(() => {
    console.log(buyer);
  }, [buyer])

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Nombre" onBlur={handleOnBlur} className="text-primary"/>
        <input type="phone" name="phone" placeholder="Teléfono" onBlur={handleOnBlur} className="text-primary"/>
        <input type="email" name="email" placeholder="Email" onBlur={handleOnBlur} className="text-primary"/>
        <input type="submit" value="Realizar compra" />
      </form>
    </div>
  )
}

export default FormCheckout;