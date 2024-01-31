import "./App.css";
// import Sidebar from "./Container/Sidebar/Sidebar";
import {
  // BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import Dashboard from "./Pages/Dashboardpage/Dashboard";
// import Header from "./Container/Header/Header";
// import Footer from "./Component/Footer/Footer";
// import Market from "./Pages/MarketPage/Market";
import Main from "./Container/Main";
import Login from "./Login/Login";
import Register from "./Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="*" element={<Main />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
