import './App.css';
import Login from "./Login";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import VegTrade from './VegTrade';
import SignUp from './SignUp';
import ViewMore from './ViewMore';

function App() {
  return(
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/vegtrade" element={<VegTrade/>}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/product/:slug" element={<ViewMore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
