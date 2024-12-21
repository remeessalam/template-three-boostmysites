import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../app/components/landingPage/LandingPage";

const LandingRoutes = ({ setLoading }) => {
  return (
    <Routes>
      <Route
        path="/app-development"
        element={<LandingPage page="app-development" setLoading={setLoading} />}
      />
      <Route
        path="/web-development"
        element={<LandingPage page="web-development" setLoading={setLoading} />}
      />
    </Routes>
  );
};

export default LandingRoutes;
