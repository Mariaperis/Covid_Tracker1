import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Tracker from "./pages/tracker/Tracker";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/tracker"
          element={<Tracker />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;