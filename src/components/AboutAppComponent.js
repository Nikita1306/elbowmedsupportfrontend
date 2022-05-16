import React, {Component, useEffect, useState} from 'react';
import DoctorService from "../services/DoctorService";
import jwt_decode from "jwt-decode";
import {Link, Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import authHeader from "../services/authHeader";
import AuthVerify from "../common/authVerify";


const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};
export default class AboutAppComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        //console.log(DoctorService.getCurrentUser());
    }
    componentDidMount() {
        console.log("component mount")
        const user = JSON.parse(localStorage.getItem("user"))
        const decodedJwt = parseJwt(user);
        console.log(user)
        console.log("decodedJwt exp = " + decodedJwt.exp * 1000)
        console.log("now time= " + Date.now())
        if (decodedJwt.exp * 1000 < Date.now()) {
            console.log("expired")
            this.setState({redirect: true})
        }

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Navigate to='/login' />
        }
    }
    render() {
        return (
            <div className="container">
                {this.renderRedirect()}
                <Navbar/>
                {/*<h1>Информация о системе</h1>*/}
                {/*<a>https://t.me/MedicalSupBot</a>*/}
                <div className="features-boxed">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">О приложении</h2>
                            <p className="text-center">Данное приложение предназначено для врачей&nbsp;<br />медицинской
                                организации, которые специализируются на проведении тотального<br />эндопротезирования
                                    локтевого или плечевого сустава</p>
                        </div>
                        <div className="row justify-content-center features" id="featuresTable">
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box">
                                    <h3 className="name">Телеграм-бот</h3>
                                    <p className="description">Для облегчения взаимодействия пациентов с прохождением
                                        анкет, срочной связью с врачом...</p><a className="learn-more"
                                                                                href="https://t.me/MedicalSupBot">https://t.me/MedicalSupBot</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-clock-o icon"></i>
                                    <h3 className="name">Always available</h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                        rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more"
                                                                                            href="#">Learn more »</a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-5 col-lg-4 item">
                                <div className="box"><i className="fa fa-list-alt icon"></i>
                                    <h3 className="name">Customizable </h3>
                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula
                                        rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more"
                                                                                            href="#">Learn more »</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
};

