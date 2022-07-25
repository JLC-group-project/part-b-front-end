import React from "react";
import { useFormik } from "formik";
 import * as Yup from "yup";
import Alert from "../../components/Alert";

function CheckoutForm() {

  async function postOrder(newOrders) {
    const res = await fetch(`${api}/orders`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // put orders in body
      body: JSON.stringify({
        orders: newOrders,
        complete: false,
        total_price: totalPrice.toFixed(2),
      }),
    });
    const returnOrder = await res.json();
    console.log(returnOrder);

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
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.number().required("Required").positive().integer(),
    }),
    onSubmit: (values) => {
      console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="w-full max-w-xs"></div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formik.handleSubmit}
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <Alert>{formik.errors.firstName}</Alert>
        ) : null}
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
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <Alert>{formik.errors.lastName}</Alert>
        ) : null}
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
        />
        {formik.touched.email && formik.errors.email ? (
          <Alert>{formik.errors.email}</Alert>
        ) : null}
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="username"
          htmlFor="email"
        >
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <Alert>{formik.errors.phoneNumber}</Alert>
        ) : null}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default CheckoutForm;
