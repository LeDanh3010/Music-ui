import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import HomePage from "./pages/homePage.jsx";
import Login from "./pages/Login.jsx";
import PasswordReset from "./pages/PasswordReset.jsx";
import Search from "./pages/Search.jsx";
import HomePrivate from "./pages/HomePrivate.jsx";
import SearchPrivate from "./pages/SearchPrivate.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="password-reset" element={<PasswordReset />} />
          <Route path="search" element={<Search />} />
          <Route path="user/home" element={<HomePrivate />} />
          <Route path="user/search" element={<SearchPrivate />} />
          <Route path="admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
