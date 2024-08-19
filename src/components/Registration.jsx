import React from "react";
import "./Registration.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const Registration = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  //   console.log(errors);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <p className="title">Welcome</p>
        <div className="input-block">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            id="name"
            placeholder="Name"
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            autoComplete="off"
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="confirm_password" className="input-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            autoComplete="off"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </div>

        <div className="modal-btns">
          <a href="#" className="btn">
            Want to register using Gmail?
          </a>
          <button className="input-btn" type="submit">
            Registration
          </button>
        </div>
      </form>
      <div className="footer">
        <p className="sign-up">
          Already have an account? <a href="#">Sign in now</a>
        </p>
      </div>
    </>
  );
};

export default Registration;
