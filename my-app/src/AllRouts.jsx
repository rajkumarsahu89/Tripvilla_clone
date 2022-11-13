import {Routes ,Route} from 'react-router-dom';
import React from 'react';

// import Homepage from './Homepage';

import Login from './Components/Login';
import Sign from './Components/Sign';
import HomePage from './Components/HomePage';
// import { Login } from './signup/Login';
// import { Login } from './signup/Login';

function AllRoutes(){
    return(
        <Routes>
        {/* <Route path="/" element={<nav_Overly/>}></Route> */}
        <Route path="/" element={<HomePage/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
        
        </Routes>
    );
}

export default AllRoutes;