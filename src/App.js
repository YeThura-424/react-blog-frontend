import { Fragment } from "react";
// import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import router from "./router";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
  );
}

export default App;
