import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar search={true}>
              <Home />
            </Navbar>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Navbar search={true}>
              <Cart />
            </Navbar>
          }
        ></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>

        <Route
          path="/login"
          element={
            <Navbar search={"login"}>
              <Login />
            </Navbar>
          }
        ></Route>

        <Route
          path="*"
          element={
            <div className="text-center py-72 h-screen ">
              <h1 className="text-2xl font-bold">404 - NOT FOUND</h1>
              <p>
                Return to{" "}
                <Link to={"/"} className="underline">
                  Home Page
                </Link>
              </p>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
