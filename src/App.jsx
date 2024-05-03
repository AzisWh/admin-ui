import { useState } from "react";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import New from "./pages/new/new";
import Single from "./pages/single/single";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mylist from "./pages/mylist/Mylist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List />}></Route>
              <Route path=":productsId" element={<Single />}></Route>
              <Route path="new" element={<New />}></Route>
            </Route>
            <Route path="mylist" element={<Mylist />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
