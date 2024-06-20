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
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              ></Route>
              <Route path="users">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                ></Route>
                <Route
                  path=":userId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                ></Route>
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New inputs={userInputs} title="Add New User" />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="products">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                ></Route>
                <Route
                  path=":productId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                ></Route>
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New inputs={productInputs} title="Add New Product" />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="categories">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <MyList />
                    </RequireAuth>
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
