import React from "react";
import { Route, Routes } from "react-router";
import { AllBlogs } from "../Components/AllBlogs";
import { ForgetPassword } from "../Components/ForgetPassword";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";

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
