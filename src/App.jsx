import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Pages/Layout/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Account } from "./Pages/Account/Account";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Account/>}/>
        <Route path="/admin" element={<Header/>}/>
        <Route path="/product " element={<div>Product page</div>} />
        <Route path="/header" element={<div>Header Details</div>}  />
        <Route path="/footer" element={<div>Footer Details</div>}  />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
