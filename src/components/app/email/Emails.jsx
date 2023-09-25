import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendBulkEmailSchema } from '../../../utils/formSchema';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import {ExclamationCircleIcon} from "@heroicons/react/solid";

const Emails = () => {
  const axiosPrivate = useAxiosPrivate();
  const BULK_EMAIL_URL = '/sendBulkEmails';

  const [emailsSent, setEmailsSent] = useState(false);

  const handleSubmit = async (values, {resetForm}) => {
		const subject = values.subject;
		const message = values.message;

		try {
			const response = await axiosPrivate.post(BULK_EMAIL_URL,
				JSON.stringify({subject, message}),
				{
					headers: {'Content-Type': 'application/json'},
					withCredentials: true
				}
			);

      resetForm();
      setEmailsSent(true);

      return response
    } catch (err) {
      console.log(`Error Message: ${err.message}`);
		}
  }

  return (
    <>
      {emailsSent ?
        <p
				className={emailsSent ? "lg:mx-20 md:mx-10 mx-3 lg:mt-10 rounded-md p-4 my-4 shadow-md border-0 border-l-4 border-ihs-green-shade-500 text-slate-500 font-thin md:text-lg text-sm" : "absolute -left-[99999px]"}
				aria-live="assertive">
          <span className="flex items-center">
            <ExclamationCircleIcon className="text-ihs-green w-6 mr-2 inline"/>
            Bulk email sent successfully
          </span>
        </p>
        : null}
      
      <div className="lg:px-20 lg:py-4 md:px-10 p-3">
        <div className="flex justify-between items-center my-5 lg:mt-5">
          <h2 className="md:text-2xl text-xl">Send Out Bulk Emails</h2>
        </div>
        <hr className="my-10"/>

        <div className="container mx-auto mt-10">
          <Formik
              initialValues={{ subject: '', message: '' }}
              validationSchema={sendBulkEmailSchema}
            onSubmit={handleSubmit}
            >
              {({ errors, isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-500 mb-2">
                      Email Subject
                      <span className="text-red-600">*</span>
                    </label>
                    <Field id="subject" name="subject" type="text"
                      className={`focus:ring-ihs-green-shade-600 w-full border border-gray-300 px-3 py-3 text-gray-500 rounded-md focus:outline-none focus:ring-1`} />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-xs mt-1 text-red-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-2">
                      Email Body
                      <span className="text-red-600">*</span>
                    </label>
                    <Field id="message" name="message" as="textarea" rows={10} className={` focus:ring-ihs-green-shade-600 
                        w-full border border-gray-300 px-3 py-3 text-gray-500 rounded-md focus:outline-none focus:ring-1`} />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-xs mt-1 text-red-400"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={
                        isSubmitting || Object.keys(errors).length > 0
                      }
                      className="disabled:cursor-not-allowed disabled:bg-ihs-green-shade-200 disabled:text-slate-600 disabled:border-slate-200 disabled:shadow-none  cursor-pointer flex-1 px-4 py-2 bg-ihs-green text-white md:text-lg text-sm font-medium rounded-md">
                      Send Emails
                    </button>
                  </div>
                </Form>
              )}
          </Formik>
        </div>
      </div>
    </>
    
  )
}

export default Emails