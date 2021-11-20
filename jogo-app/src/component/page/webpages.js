
import Home from './home';
import LogIn from './logInPage';
import SignUp from './signUpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './component/logo.png';
const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component = { Home }/>
      <Route path = "/login" component = { LogIn }/>
      <Route path = "/signup" component = { SignUp }/>
    </Router>
  );
}

export default Webpages;
