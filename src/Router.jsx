import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Tracker from "./views/Tracker";

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