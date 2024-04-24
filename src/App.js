import { Fragment } from "react";
import Home from "./pages/Home";

// import router from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
