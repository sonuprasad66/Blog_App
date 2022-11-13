import React from "react";
import { Route, Routes } from "react-router";
import { AllBlogs } from "../Components/AllBlogs/AllBlogs";
import { ForgetPassword } from "../Components/ForgotPassword/ForgetPassword";
import { Login } from "../Components/Login/Login";
import { Signup } from "../Components/Signup/Signup";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
};
