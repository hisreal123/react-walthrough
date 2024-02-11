// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./Pages/Documents/NotFound";
import Welcome from "./Pages/Documents/Welcome";
import Routing from "./Pages/Documents/Routing";
// import Home from "./Pages/Blog/Home";
import DataBinding from "./Pages/Documents/DataBinding";
import Credits from "./Pages/Documents/Credits";
import React from "./Pages/Documents/React";
import Login from "./Pages/Blog/Login";
import Register from "./Pages/Blog/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Blog/Home";
import Components from "./Pages/Documents/Components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="react" element={<React />} />
          <Route path="components" element={<Components />} />
          <Route path="data-binding" element={<DataBinding />} />
          <Route path="routing" element={<Routing />} />
          <Route path="credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="blog">
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
