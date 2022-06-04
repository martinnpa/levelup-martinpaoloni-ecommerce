//@ts-check
import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import Button from 'components/Common/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FetchProduct } from 'api';
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const FormCheckout = ({cart}) => {
  const [order, setOrder] = useState({});
  const [noStock, setNoStock] = useState([]);

  let navigate = useNavigate()


  let style = `
  block w-full bg-transparent rounded-sm
  border-b border-primary text-primary-on
  mt-4 py-2 px-2 leading-2
  placeholder:italic
  focus:shadow-inner focus:bg-black/40 focus:shadow-black
  focus:outline-0 focus:border-0
  focus-visible:outline-0`;




  useEffect(() => {
    // console.log(cart)
    if (Object.keys(order).length) {
      const controlStock = cart.map(product => {
        FetchProduct(product.id).then(result => {
          if (result.stock < product.qty) {
            // Productos sin stock
            if (product.name !== 'undefined') {
              return  product.name;
            }
          }
        })
      });
      Promise.all(controlStock).then( result => {
        const filterUndefined = result.filter(item => item);
        if (filterUndefined.length > 0) {
          setNoStock(filterUndefined);
        } else {
          const db = getFirestore();
          const ordersCollection = collection(db, "orders");
          addDoc(ordersCollection, order ).then( ({id}) => {
            alert('Su orden fue generada, su id de orden es: '+id);
          })
          .then(()=>navigate("/", { replace: true }))
        }
      })

    }
  }, [order])

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
            .max(15, 'No puede exceder 15 caracteres.')
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
            buyer: values
          }
          setOrder(newOrder);
        }}
      >
        <Form className="w-full">
          <H1 className="text-center mb-8">Completa tu orden</H1>

          <Field className={`${style}`} type="text" name="name" placeholder="Nombre"/>
          <span className="text-red-500 leading-tight text-sm font-light"><ErrorMessage name="name"/></span>

          <Field className={`${style}`} type="phone" name="phone" placeholder="Teléfono"/>
          <span className="text-red-500 leading-tight text-sm font-light"><ErrorMessage name="phone"/></span>

          <Field className={`${style}`} type="email" name="email" placeholder="Email"/>
          <span className="text-red-500 leading-tight text-sm font-light"><ErrorMessage name="email"/></span>

          <Button type="submit" className="block w-full py-2 mt-8" filled>Realizar compra</Button>
        </Form>
      </Formik>
    </>
  )
}

export default FormCheckout;