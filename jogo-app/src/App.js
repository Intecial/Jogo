import logo from './logo.svg';
import './App.css';
import Home from './component/page/home';
import LogIn from './component/page/logInPage';
import SignUp from './component/page/signUpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Webpages from './component/page/webpages';
// import logo from './component/logo.png';
function App() {
  return (
    <div>
    <Webpages/>
  </div>
  );
}

export default App;
