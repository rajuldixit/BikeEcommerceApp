import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

const AppRoutes = () => {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>loader</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
