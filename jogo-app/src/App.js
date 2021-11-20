import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar'
import LogInForm from './component/logInForm';
import LogInPage from './component/page/logInPage';
import SignInForm from './component/signInForm';
import SignUp from './component/page/signUpPage';
import Home from './component/page/home';
import Card from './component/card';
import Cards from './component/cards';
// import logo from './component/logo.png';
function App() {
  return (
    <>
      <div>
        <Home/>
        {/* <Cards/> */}
      </div>
    </>
  );
}

export default App;
