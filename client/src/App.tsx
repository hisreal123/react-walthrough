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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         path: "/",
//         element: <Welcome />,
//       },
//       {
//         index: true,
//         path: "/data-binding",
//         element: <DataBinding />,
//       },
//       {
//         index: true,
//         path: "/react",
//         element: <React />,
//       },
//       {
//         index: true,
//         path: "/routing",
//         element: <Routing />,
//       },
//       {
//         index: true,
//         path: "/credits",
//         element: <Credits />,
//       },
//     ],
//   },

//   {
//     path: "/Blog",
//     element: <Register />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         path: "/Blog/login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="data-binding" element={<DataBinding />} />
          <Route path="react" element={<React />} />
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
