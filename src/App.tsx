import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Iphone from "./Pages/Iphone";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex justify-center items-center">
        <Routes>
          <Route path="" element={<Iphone />} />
          <Route path="*" element={<Iphone />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
