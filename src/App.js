import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import VerificationPin from './components/Verification';
import SignIn from "./components/SignIn";
import SignUp from './components/SignUp';
import routes from './Routes';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();

  useEffect(() => {
    if (token != null) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* <Route
          path="/"
          element={
            isAuthenticated ? (
              isVerified ? (
                <Dashboard />
              ) : (
                <Navigate to="/verifyphone" replace />
              )
            ) : (
              <SignUp setIsAuthenticated={setIsAuthenticated} />
            )
          }
        /> */}
        {/* <Route
          path="/verifyphone"
          element={
            isAuthenticated ? (
              isVerified ? (
                <Dashboard />
              ) : (
                <VerificationPin setIsVerified={setIsVerified} />
              )
            ) : (
              <Navigate to="/" replace />
            )
          }
        /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}

        {/* Create dynamic routes */}
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.route}
            element={
              //   isAuthenticated ? (
              //   isVerified ? (
              //     <Dashboard />
              //   ) : (
              //     <VerificationPin setIsVerified={setIsVerified} />
              //   )
              // ) : (
              //   <Navigate to="/" replace />
              // ) &&
              route.component}
          />
        ))}
      </Routes>
    </div>
  );
}

function RouteWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default RouteWrapper;







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
