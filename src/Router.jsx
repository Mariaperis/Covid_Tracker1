import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Chats } from "./views/Chats";
import { Table } from "./views/Table";
import { Navigation } from "./layouts/navbar/Navigation";
import Sidebar from "./layouts/sidebar/Sidebar";
import { Tiles } from "./views/Tiles";
import { CountryWise } from "./views/CountryWise";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Chats" element={<Chats />} />
        <Route path="/Table" element={<Table />} />
        <Route path="/Tiles" element={<Tiles />} />
        <Route path="/CountryWise" element={<CountryWise />} />
      </Routes>
    </BrowserRouter>
  );
};