import { Fragment } from "react";
import Home from "./pages/Home";

// import router from "./router";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Category from "./pages/Category";
import SinglePost from "./pages/SinglePost";
import ErrorPage from "./pages/404error";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
