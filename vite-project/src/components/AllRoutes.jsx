import React from "react";
import { Route, Routes } from "react-router-dom";
import { CompletedData } from "./ComltedTabel";
import LoginForm from "./Login";
import Table from "./Table";
import Not from "./Not";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/active" element={<Table />} />
      <Route path="/completed" element={<CompletedData />} />
      <Route path="*" element={<Not />} />
    </Routes>
  );
};
export default AllRoutes;
