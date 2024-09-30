import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const MortgageCalculator = lazy(() => import('./Components/MortgageCalculator'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MortgageCalculator />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
