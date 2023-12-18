
import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import SignUp from './components/SignUp';
import TermsAndCOnditions from './components/TermsAndCOnditions';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Footer from "./components/Footer";
import Body from "./components/Body";
function App() {
  return (
    <Router>
    <div className="App">
    <NavigationBar/>

  <Routes>
  <Route path ="/body" element={ <Body/>}></Route>
        <Route path ="/" element={ <Home/>}></Route>
        <Route path ="/login" element={ <Login/>}></Route>
        <Route path ="/dashboard" element={ <Dashboard/>}></Route>
        <Route path ="/about" element={ <About/>}></Route>
        <Route path ="/privacyPolicy" element={ <PrivacyPolicy/>}></Route>
        <Route path ="/signup" element={<SignUp/>}></Route>
        <Route path ="/termsAndConditions" element={<TermsAndCOnditions/>}></Route>
  </Routes>
  <Footer/>
  </div>
    </Router>
    // <div>
    //    <Body />
    // </div>
  );
}

export default App;
