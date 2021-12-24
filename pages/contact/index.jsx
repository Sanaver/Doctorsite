import React from 'react';
import { Formik, Form, Field } from 'formik';
import assets from '../../public/assets';
import Layout from '../../components/Layout';
import styles from './styles.module.scss';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import AlertMessage from '../../components/AlertMessage/index';
import { contactSchema } from '../../schemas/contactSchema';

import { useSendContactMail } from '../../containers/ContactContainer';

const Contact = () => {
  const { contactUsSubtitle, borderColor } = styles;
  const [
    sendContactMail,
    showFormStatus,
    formMessage,
    hideFormStatusMessage,
  ] = useSendContactMail();

  return (
    <Layout title="Contact us">
      <div className="container px-5 mx-auto lg:px-24 py-10">
        <div className="flex flex-wrap ">
          <div className={`w-full md:w-1/2 rounded-lg p-5 ${borderColor}`}>
            <h2 className="font-bold text-navy-default text-4xl">Contact us</h2>
            <h3 className={`${contactUsSubtitle} text-navy-lighter mb-5`}>
              Have any questions about our products, services, or anything else?
              <br /> Let us know and we ll get back to you
            </h3>

            {/* Form */}
            <Formik
              initialValues={{
                name: '',
                message: '',
                phone: '',
              }}
              validationSchema={contactSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                sendContactMail(values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isValid, isSubmitting }) => {
                return (
                  <>
                    <Form>
                      <Field
                        name="name"
                        label="Name*"
                        component={Input}
                        placeholder="Enter your name"
                        formClasses="mb-4"
                        inputType="text"
                      />

                      <div className="wrapper relative">
                        <div className="flag absolute z-10 pt-10 pl-4 flex">
                          <img src={assets.india} alt="india flag" />{' '}
                          <span
                            className="text-navy-default font-medium pl-2 border-r pr-2"
                            style={{ borderColor: '#BDC2C9' }}
                          >
                            +91
                          </span>
                        </div>
                        <Field
                          name="phone"
                          label="Mobile number*"
                          component={Input}
                          placeholder="Enter mobile number"
                          inputType="text"
                          className="pl-24 bg-snow-lighter focus:outline-none rounded-lg py-3 px-4 block w-full mb-2 relative z-0"
                        />
                      </div>

                      <Field
                        name="message"
                        label="Your Query"
                        component={Textarea}
                        placeholder="Describe your query"
                        rows="4"
                        formClasses="mb-4"
                      />
                      <Button
                        disabled={isSubmitting || !isValid}
                        label="Submit"
                        className="w-full"
                      />
                    </Form>
                    {showFormStatus && formMessage && (
                      <AlertMessage
                        type={formMessage.type}
                        message={formMessage.message}
                        onClick={() => hideFormStatusMessage()}
                      />
                    )}
                  </>
                );
              }}
            </Formik>
          </div>
          <div className="w-full md:w-1/2 flex flex-shrink px-10">
            <img src={assets.contactUs} alt="Contact us" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
