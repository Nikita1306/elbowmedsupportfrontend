import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListDoctorComponent from "./components/ListDoctorComponent";
import Login from "./components/LoginTest";
import Navbar from "./components/Navbar";
import DoctorProfile from "./components/DoctorProfile";
import DoctorPatientComponent from "./components/DoctorPatientComponent";
import "./assets/bootstrap/css/bootstrap.min.css"
import AboutAppComponent from "./components/AboutAppComponent";

ReactDOM.render(

    <Router>

        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/doctor/profile' element={<DoctorProfile/>}/>
            <Route path='/doctor' element={<ListDoctorComponent/>}/>
            <Route path='/doctor/patient/:id' element={<DoctorPatientComponent/>}/>
            <Route path='/about' element={<AboutAppComponent/>}/>
            <Route path='/' element={<AboutAppComponent/>}/>
        </Routes>
    </Router>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
   document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
