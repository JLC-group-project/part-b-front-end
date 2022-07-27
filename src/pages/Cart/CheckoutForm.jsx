import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "../../components/Alert";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ cartItems, totalPrice, api }) {
  // Regular expression to accept AUS phone numbers
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  
  // Regular expression to accept alphabets only and spaces
  const nameRegExp = /^[a-zA-Z ]*$/;

  const navigate = useNavigate();

  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // POST to database with the customer's order
  async function postOrder(customer_info) {
    const res = await fetch(`${api}/orders`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // put orders and customer info in body
      body: JSON.stringify({
        complete: false,
        customer_info,
        orders: cartItems,
        total_price: totalPrice.toFixed(2),
      }),
    });
    const returnOrder = await res.json();
    navigate(`./success/${returnOrder._id}`);
  }

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    // Validation for all input fields
    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .matches(nameRegExp, "Only letters allowed")
        .max(25, "Must be 25 characters or less")
        .required("This field is required"),
      lastName: Yup.string()
        .trim()
        .matches(nameRegExp, "Only letters allowed")
        .max(25, "Must be 25 characters or less")
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("This field is required"),
    }),
    // create customer's information body for the order
    onSubmit: (values) => {
      const customerInfo = {
        first_name: capitaliseFirstLetter(values.firstName),
        last_name: capitaliseFirstLetter(values.lastName),
        email: values.email,
        phone_number: (values.phoneNumber).toString(),
      };
      postOrder(customerInfo);
    },
  });
  return (
    <>
      <div className="flex-col m-4">
        <div className="justify-center flex">
          <div className="w-full max-w-lg ">
            <div className="flex-col md:items-center mb-6">
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      placeholder="John"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <Alert>{formik.errors.firstName}</Alert>
                    ) : null}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                      type="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      placeholder="Smith"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <Alert>{formik.errors.lastName}</Alert>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="myemail@gmail.com"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <Alert>{formik.errors.email}</Alert>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Phone Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                      placeholder="0452334455"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <Alert>{formik.errors.phoneNumber}</Alert>
                    ) : null}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutForm;
