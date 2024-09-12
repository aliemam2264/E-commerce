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
        className="flex flex-col items-center justify-center mt-[10%]"
        onSubmit={formik.handleSubmit}
      >
        <div className="text-4xl">
          <Title text2={"Login"} />
        </div>
        <div className="flex flex-col gap-5 w-full items-center mt-5">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border-2 border-slate-950 sm:w-1/3 px-3 py-2"
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
            className="border-2 border-slate-950 sm:w-1/3 px-3 py-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="text-red-700">
            {formik.touched.password && formik.errors.password}
          </span>
        </div>

        <div className="flex items-center justify-between w-1/3 cursor-pointer">
          <span>Forget Your Password?</span>
          <span
            onClick={() => {
              navigate("/signup");
            }}
          >
            Create Account
          </span>
        </div>

        <div>
          <button className="bg-black text-white px-8 py-2 mt-4 font-light">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
