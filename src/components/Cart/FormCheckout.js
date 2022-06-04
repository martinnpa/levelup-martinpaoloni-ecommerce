import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import Button from 'components/Common/Button';
import { useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormCheckout = () => {
  const [buyer, setBuyer] = useState({});

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      // direction: {
      //   city: '',
      //   cp:'',
      //   country: '',
      //   state: '',
      // }
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .max(15, 'No puede exceder 15 caracteres.')
      .required('Debe completar el campo'),
      phone: Yup.string()
      .max(20, 'No puede contener más de 20 caracteres.')
      .min(5, 'Debe tener contener por lo menos 5 números'),
      email: Yup.string().email('Ingrese un email valido.').required('Required'),
    }),
    onSubmit: values => {console.log(values)}
  })


  // useEffect(() => {
  //   console.log(buyer);
  // }, [buyer])

  let style = `
  block w-full bg-transparent rounded-sm
  border-b border-primary text-primary-on
  mb-4 py-2 px-2 leading-2
  placeholder:italic
  focus:shadow-inner focus:bg-black/40 focus:shadow-black
  focus:outline-0 focus:border-0
  focus-visible:outline-0`;

  useEffect(() => {
    console.log(formik.touched);
  }, [formik.touched])
  
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <H1 className="text-center mb-8">Completa tu orden</H1>

        <input className={`${style}`} type="text" id="name" placeholder="Nombre" {...formik.getFieldProps('name')}/>
        {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
        ) : null}

        <input className={`${style}`} type="phone" id="phone" placeholder="Teléfono" {...formik.getFieldProps('phone')}/>
        {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
        ) : null}
        <input className={`${style}`} type="email" id="email" placeholder="Email" {...formik.getFieldProps('email')}/>

        <Button type="submit" className="block w-full py-2 mt-8" filled>Realizar compra</Button>
      </form>
    </>
  )
}

export default FormCheckout;