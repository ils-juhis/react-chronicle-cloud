import React from 'react'
import FormCard from '../../components/FormCard/FormCard'
import './ForgotPassword.scss'
import { Form, Formik } from 'formik'
import MUICustomInput from '../../components/MUICustomInput/MUICustomInput'
import emailLogo from '../../assets/images/email.svg'
import { forgotPwdSchema } from '../../schema/AllSchemas'

function ForgotPassword() {
  return (
    <>
      <FormCard name="Forgot Password">
        <div id="forgot-pwd-form" className="mt-2">
          <div className="content mb-3">
            Enter your registered email address. We will email you a new password for your account
          </div>
          <div className="inputs">
            <Formik
              initialValues={{ email: ''}}
              validationSchema={forgotPwdSchema}
              onSubmit={(values)=>{
                console.log(values)
              }}>

              {
                formik =>{
                  return (
                    <Form>
                      <MUICustomInput 
                        label="Email" 
                        name="email"
                        type="text"
                        icon={emailLogo}/>
                      <button className='text-light p-2 px-3 mt-3 text-uppercase' type='submit' disabled={!(formik.dirty && formik.isValid)}>retrive password</button>
                    </Form>
                  )
                }
              }
              
            </Formik>
          </div>
        </div>
      </FormCard>
    </>
  )
}

export default ForgotPassword