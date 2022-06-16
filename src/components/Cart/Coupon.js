import React, {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FetchCoupon } from 'api';
import { Disclosure, Transition} from '@headlessui/react';

const Coupon = ({subTotal, setUserDiscount}) => {
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setUserDiscount({});
    setSuccess("");
  }, [subTotal])


  const formik = useFormik({
    initialValues: {
      coupon: '',
    },
    validationSchema: Yup.object({
      coupon: Yup.string()
      .max(15, 'No puede exceder 15 caracteres.')
      .required('Tenés que completar el campo'),
    }),
    onSubmit: values => {
      setLoading(true)
      setUserDiscount({})
      setSuccess("")
      FetchCoupon(values.coupon).then(result => {
        setUserDiscount(result);
        setSuccess(`Descuento agregado! -${result.percent}% OFF (tope: $${result.max})`);
        setLoading(false);
      }).catch(error=>{
        setUserDiscount({})
        setSuccess("");
        formik.setErrors({ coupon: error });
        console.error(error);
        setLoading(false);
      });
    }
  })

  return (
    <Disclosure as="div" className="text-center md:text-right">
      {({ open }) => (
      <>
      <Disclosure.Button className="inline-block text-right underline decoration-1 py-2 text-sm italic">
        ¿Tenés un cupón? 
        {open ?
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        :
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        }
      </Disclosure.Button>
      <Transition
        enter="transition transform ease"
        enterFrom="-translate-y-6 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition transform opacity ease"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-6 opacity-0"
      >
        <Disclosure.Panel>
          <form onSubmit={formik.handleSubmit} className="flex items-center justify-center text-center md:justify-end md:text-right">
              <input className="mr-2 placeholder:italic bg-black shadow-black rounded-sm shadow-inner bg-black/50 px-2 py-1 border border-black/20 focus:outline-1 focus:outline-gray-600" type="text" id="coupon" placeholder="Cupón" {...formik.getFieldProps('coupon')}/>
              <button type="submit" className="rounded-sm bg-grey-1 px-3 focus:outline-1 focus:outline-gray-500 disabled:opacity-40" disabled={loading}>
                aplicar
              </button>
          </form>
          {formik.touched.coupon && formik.errors.coupon && <small className="text-alert ml-1 text-center md:text-right block mt-2">{formik.errors.coupon}</small>}
          {success && <span className="text-base text-success ml-1 text-center md:text-right block mt-2">{success}</span>}
        </Disclosure.Panel>
      </Transition>
    </>
    )}
    </Disclosure>
  )
}

export default Coupon