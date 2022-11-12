import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "components/MainLayout";
import Home from "modules/Home/pages/Home";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
