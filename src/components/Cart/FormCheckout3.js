//@ts-check
import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import Button from 'components/Common/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FetchProduct2, NewOrder, UpdateStock } from 'api';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Spinner from 'components/Common/Spinner';

const FormCheckout = ({cart, resetCart, total }) => {
  // const [order, setOrder] = useState({});
  const [noStock, setNoStock] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  let navigate = useNavigate()


  let style = `
  block w-full bg-transparent rounded-sm
  border-b border-primary text-primary-on
  mt-4 py-2 px-2 leading-2
  placeholder:italic
  focus:shadow-inner focus:bg-black/40 focus:shadow-black
  focus:outline-0 focus:border-0
  focus-visible:outline-0`;


const ifStockSubmitOrder = (order) => {
  if (Object.keys(order).length) {
    setLoading(true);
    const fetch = async () => {
      return await FetchProduct2('product.id');
    }
    const controlStock = cart.map(product => {
      return fetch().then((result) => {
        console.log('fetch')
        if (result.data().stock < product.qty) {
          // Productos sin stock
          if (product.name !== 'undefined') {
            return  product.name;
          }
        }
      }).catch(eror => {throw eror})
    });
    Promise.all(controlStock)
    .then( result => {
      console.log('promise all ctrl stock');
      const filterUndefined = result.filter(item => item);
      if (filterUndefined.length > 0) {
        setLoading(false);
        setNoStock(filterUndefined);
      } else {
        alert('bien');
      }
    }).catch(error=> console.log(error))
  }
}

  // useEffect(() => {
  //   console.log(noStock.length)
  // }, [noStock])


  return (
    <>
      <Formik
        initialValues={{ name: '', phone: '', email: '' }}
        validationSchema={
          Yup.object({
            name: Yup.string()
            .max(20, 'No puede exceder 20 caracteres.')
            .required('Debe completar el campo'),
            phone: Yup.string()
            .max(20, 'No puede contener más de 20 caracteres.')
            .min(5, 'Debe tener contener por lo menos 5 números')
            .required('Ingrese un teléfono')
            ,
            email: Yup.string().email('Ingrese un email valido.').required('Ingrese un email'),
          })
        }
        onSubmit={values => {
          let newOrder = {
            products: [...cart],
            buyer: values,
            total: total
          }
          ifStockSubmitOrder(newOrder);
        }}
      >
        <Form className="w-full">
          <H1 className="mb-8 text-center">Completa tu orden</H1>

          <Field className={`${style}`} type="text" name="name" placeholder="Nombre"/>
          <span className="text-sm font-light leading-tight text-red-500"><ErrorMessage name="name"/></span>

          <Field className={`${style}`} type="phone" name="phone" placeholder="Teléfono"/>
          <span className="text-sm font-light leading-tight text-red-500"><ErrorMessage name="phone"/></span>

          <Field className={`${style}`} type="email" name="email" placeholder="Email"/>
          <span className="text-sm font-light leading-tight text-red-500"><ErrorMessage name="email"/></span>

          <Button type="submit" className="block w-full py-2 mt-8" filled disabled={loading}>
            Realizar compra
          </Button>
          {loading && 
            <div className="px-2 pt-8 text-center">
              <Spinner/>
            </div>
          }
        </Form>
      </Formik>
    </>
  )
}

export default FormCheckout;