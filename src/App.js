import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import SignUp from "./components/SignUp";

// import Test from "./components/Test";
import VerificationPin from "./components/Verification";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";

function App() {

  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();

  debugger;
  useEffect(() => {
    if (token != null || token != undefined) {
      navigate("/dashboard");
    }
  }, [navigate, token]);

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />

      <Route path="/verifyphone" element={<VerificationPin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* {!token && <Route path="/login" element={<Login />} />} */}
      <Route path="/signin" element={<SignIn />} />

      {/* <Route path="/test" element={<Test />} /> */}
    </Routes>
  );
}

function RouterWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default RouterWrapper;







// // import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import VerificationPin from './components/Verification';
// import Dashboard from './components/Dashboard';

// function App() {
//   const user = JSON.parse(localStorage.getItem('userInfo'))
//   const token = user.auth_token;

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<SignUp />} />
//           <Route path='/signin' element={<SignIn />} />
//           <Route path='/verifyphone' element={<VerificationPin />} />
//           <Route path='/dashboard' element={<Dashboard />} />
//         </Routes>
//       </BrowserRouter>

//     </div>
//   );
// }

// export default App;
