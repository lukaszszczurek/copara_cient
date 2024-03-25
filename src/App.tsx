import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';


// components
import Home from './views/Home';
import Main from "./views/Main";
import LoginUser from "./views/login/LoginUser";
import Register from "./views/login/Register";
import LoftHomeView from "./views/lofts/LoftHomeView";


function App() {

return (
  // create routes
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path={"/home"} element={<Home/>} />
                <Route path={"/login"} element={<LoginUser/>} />
                <Route path={"/register"} element={<Register/>} />
                <Route path={`/myLofts/:id`} element={<LoftHomeView/>} />
            </Routes>
        </BrowserRouter>

    </div>


  );
}

export default App;
function then(arg0: (response: any) => void): any {
    throw new Error('Function not implemented.');
}



