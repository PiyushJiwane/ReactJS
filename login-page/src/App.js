import './App.css';
import AuthContext from './Components/AuthContext';
import CURDOperation from './Components/CURDOperation';
import FirebaseAuth from './Components/FirebaseAuth';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div>
      {/* <LoginPage/> */}
      {/* <FirebaseAuth/> */}
      {/* <AuthContext/> */}
      <CURDOperation/>
    </div>
  );
}

export default App;
