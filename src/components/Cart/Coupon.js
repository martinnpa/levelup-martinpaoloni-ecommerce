import React, {useState} from 'react';
import Button from 'components/Common/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FetchCoupon } from 'api';

const Coupon = ({userDiscount, setUserDiscount}) => {

  const [success, setSuccess] = useState("")

  const formik = useFormik({
    initialValues: {
      coupon: '',
    },
    validationSchema: Yup.object({
      coupon: Yup.string()
      .max(15, 'No puede exceder 15 caracteres.')
      .required('Debe completar el campo'),
    }),
    onSubmit: values => {
      FetchCoupon(values.coupon).then(result => {
        setUserDiscount(result);
        setSuccess(`Descuento agregado! -${result.percent}% OFF`);
      }).catch(error=>{
        console.error(error);
        formik.setErrors({ coupon: error });
      });
      console.log(values.coupon)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <input className="bg-black shadow-black rounded-sm shadow-inner border-black/20 bg-black/50 px-2 py-1" type="text" id="coupon" placeholder="Cupón" {...formik.getFieldProps('coupon')}/>
      {formik.touched.coupon && formik.errors.coupon ? (
      <small className="text-alert ml-1">{formik.errors.coupon}</small>
      ) : null}
      {success && <small className="text-success ml-1">{success}</small>}

      <Button type="submit" className="" filled>Ingresar cupón</Button>
  </form>
  )
}

export default Coupon