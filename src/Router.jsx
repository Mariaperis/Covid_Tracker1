//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Tracker from "./pages/tracker/Tracker";
import Chats from "./pages/tracker/Chats";
import Table from "./pages/tracker/Table";
import Tiles from "./pages/tracker/Tiles";
import CountryWise from "./pages/countryWise/CountryWise";
import UnderConstruction from "./pages/tracker/UnderConstruction";

const Router = () => {
  return (
    <BrowserRouter basename="/Covid_Tracker1">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tracker" element={<Tracker />}>
          <Route path="chats" element={<Chats />} />
          <Route path="table" element={<Table />} />
          <Route path="tiles" element={<Tiles />} />
          <Route path="country-wise" element={<CountryWise />} />
          <Route path="widgets" element={<UnderConstruction />} />
          <Route path="charts" element={<UnderConstruction />} />
          <Route path="continent" element={<UnderConstruction />} />
          <Route path="messages" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
