import React from "react";
import Title from "./Title";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(3, "Too Short")
      .max(10, "Too Long")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10 text-4xl">
          <Title text2={"Sign Up"} />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-2 border-slate-950 w-full px-3 py-2"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border-2 border-slate-950 w-full px-3 py-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className="text-red-700">
          {formik.touched.email && formik.errors.email}
        </span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-2 border-slate-950 w-full px-3 py-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <span className="text-red-700">
          {formik.touched.password && formik.errors.password}
        </span>

        <div className="flex justify-between w-full mt-[-8px]">
          <span className="cursor-pointer">Forget Your Password?</span>
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login Here
          </span>
        </div>

        <div>
          <button className="bg-black text-white px-8 py-2 mt-4 font-light">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
