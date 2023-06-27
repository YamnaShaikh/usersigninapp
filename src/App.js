// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import VerificationPin from './components/Verification';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/verifyphone' element={<VerificationPin />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
