//@ts-check
import React, { useContext, useEffect, useState } from 'react';
import H1 from 'components/Common/H1';
import Button from 'components/Common/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FetchProduct, NewOrder, UpdateStock } from 'api';
import { Timestamp } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Spinner from 'components/Common/Spinner';

const FormCheckout = ({cart, resetCart, total }) => {
  const [noStock, setNoStock] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  let navigate = useNavigate()


  let style = `
  block w-full bg-transparent rounded-sm
  border-b text-primary-on
  mt-4 py-2 px-2 leading-2
  placeholder:italic
  focus:shadow-inner focus:bg-black/40 focus:shadow-black
  focus:outline-0 focus:border-0
  focus-visible:outline-none
  focus-visible:outline-0`;


const submitOrder = (order) => {
  if (Object.keys(order).length > 0) {
    setLoading(true);

    const controlStock = cart.map(product => {
      return FetchProduct(product.id).then(result => {
        if (result.stock < product.qty) {
          // Productos sin stock
          if (product.name !== 'undefined') {
            return  product.name;
          }
        }
      }).catch(error => {throw error;})
    });

    Promise.all(controlStock)
    .then( result => {
      const filterUndefined = result.filter(item => item);
      if (filterUndefined.length > 0) {
        setNoStock(filterUndefined);
        setLoading(false);
      } else {
        const updateStock = cart.map(product => {
          return UpdateStock(product.id, product.qty).then(result => {
          }).catch(error=>{
            throw error;
          });
        });
        Promise.all(updateStock).then(result => {
            NewOrder(order).then((id) => {
              resetCart();
              navigate(`../new-order/${id}`, { replace: true })
            }).catch((error) => {
              setErrors('Ocurrió un problema al generar su orden, intente nuevamente más tarde.');
              console.error(error);
            })
          setLoading(false);
        }).catch(error => {
          console.error(error);
          setErrors('Ocurrió un problema al generar su orden, intente nuevamente más tarde.');
          setLoading(false);
        });
      }
    }).catch(error=> {
      console.log(error);
      setLoading(false);
      setErrors('Ocurrió un problema inesperado, intente nuevamente más tarde.');
    })
  }
}

  return (
    <>
    <style>{`
    form input {
      border-color: #444;
    }
    `}</style>
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
            .required('Ingrese un teléfono'),
            email: Yup.string().email('Ingrese un email valido.').required('Ingrese un email'),
          })
        }
        onSubmit={values => {
          const newOrder = {
            products: [...cart],
            buyer: values,
            total: total,
            date: Timestamp.fromDate(new Date(Date.now())),
          }
          submitOrder(newOrder);
        }}
      >
        <Form className="w-full mb-5 sticky top-40">
          <H1 className="mb-8 text-center">Finalizá tu pedido</H1>

          <Field className={`${style}`} type="text" name="name" placeholder="Nombre"/>
          <span className="text-sm font-light leading-tight text-alert"><ErrorMessage name="name"/></span>

          <Field className={`${style}`} type="phone" name="phone" placeholder="Teléfono"/>
          <span className="text-sm font-light leading-tight text-alert"><ErrorMessage name="phone"/></span>

          <Field className={`${style}`} type="email" name="email" placeholder="Email"/>
          <span className="text-sm font-light leading-tight text-alert"><ErrorMessage name="email"/></span>

          <Button type="submit" className="block w-full py-2 mt-8" filled disabled={loading}>
            Realizar compra
          </Button>
        </Form>
      </Formik>
      {loading && 
            <div className="px-2 pt-8 text-center">
              <Spinner/>
            </div>
          }
          {errors &&
          <p className="text-center">{errors}</p>
          }

          {noStock.length > 0 &&
            <>
              <p>No se pudo realizar la orden, nos quedamos sin stock en:</p>
              <ul className="list-disc marker:text-secundary-alt">
              { noStock.map(((product, index) => {
                return <li key={index}>{product}</li>
              })) }
              </ul>
            </>
          }
    </>
  )
}

export default FormCheckout;