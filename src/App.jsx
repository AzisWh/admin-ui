import { useState } from "react";
import Home from "./pages/home/home";
import List from "./pages/list/list";
import New from "./pages/new/new";
import Single from "./pages/single/single";
import Login from "./pages/login/login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";
import MyList from "./pages/mylist/Mylist";
// darkmode
import "./style/darkmode.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
// datatable
import { userColumns, productColumns } from "./datatablesource";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                path="login"
                element={
                  <NotRequireAuth>
                    <Login />
                  </NotRequireAuth>
                }
              ></Route>
              <Route
                index
                element={
                  <NotRequireAuth>
                    <Home />
                  </NotRequireAuth>
                }
              ></Route>
              <Route path="users">
                <Route
                  index
                  element={
                    <NotRequireAuth>
                      <List columns={userColumns} />
                    </NotRequireAuth>
                  }
                ></Route>
                <Route
                  path=":userId"
                  element={
                    <NotRequireAuth>
                      <Single columns={userColumns} />
                    </NotRequireAuth>
                  }
                ></Route>
                <Route
                  path="new"
                  element={
                    <NotRequireAuth>
                      <New inputs={userInputs} title="Add New User" />
                    </NotRequireAuth>
                  }
                />
              </Route>
              <Route path="products">
                <Route
                  index
                  element={
                    <NotRequireAuth>
                      <List columns={userColumns} />
                    </NotRequireAuth>
                  }
                ></Route>
                <Route
                  path=":productId"
                  element={
                    <NotRequireAuth>
                      <Single columns={userColumns} />
                    </NotRequireAuth>
                  }
                ></Route>
                <Route
                  path="new"
                  element={
                    <NotRequireAuth>
                      <New inputs={productInputs} title="Add New Product" />
                    </NotRequireAuth>
                  }
                />
              </Route>
              <Route path="categories">
                <Route
                  index
                  element={
                    <NotRequireAuth>
                      <MyList />
                    </NotRequireAuth>
                  }
                ></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
