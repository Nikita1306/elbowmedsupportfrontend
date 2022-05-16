import React, {Component, useEffect, useState} from 'react';
import DoctorService from "../services/DoctorService";
import {Link, Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import authHeader from "../services/authHeader";

export default class ListDoctorComponent extends Component{


    constructor(props) {
        super(props);
            //console.log(DoctorService.getCurrentUser());
        DoctorService.getCurrentDoctor().then((response) => {
            console.log(response);
            this.onClickPatient = this.onClickPatient.bind(this)
            this.setState({doctor: response.data})
            //setDoctors(response.data)
            console.log(this.state.doctor);
        }).catch(e => {
            console.log()
            console.log("error");
            console.log(e)
            this.setState({redirect:"/login"})

        });

        this.state = {doctors:[], userId: "", redirect: null, patientRedirect: null}
    }


    //Getting ID of clicked patient
    //TODO: Call from here link to Patient profile page
    onClickPatient(event) {
        console.log(event.currentTarget.getAttribute("data-item"))
        console.log(event)
        this.setState({patientRedirect: "/doctor/patient/" + event.currentTarget.getAttribute("data-item")})
        console.log(this.state.patientRedirect)
    }
    async componentDidMount() {
        await axios.get("http://localhost:8080/doctor/myProfile", {headers: authHeader()})
            .then(response => {
                console.log(response.data.userId);
                this.setState({userId: response.data.userId})
                console.log(this.state.userId)
            })
        let test = "http://localhost:8080/doctor/" + this.state.userId + "/patients";
        console.log(test)
        axios.get(test, {headers: authHeader()}).then(response1 => {
            console.log(response1.data)
            this.setState({doctors: response1.data})
        })

    }

    getCurrentDoctor() {

        let id;
        DoctorService.getCurrentDoctor().then(function (result) {
            console.log(result)
        })
        console.log(id)
    }


    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect}/>
        }
        if (this.state.patientRedirect) {
            return <Navigate to={this.state.patientRedirect}/>
        }
    return (
        <div className="container">
            <Navbar/>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr></tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td id="tdStyle">
                            {/*<img id="placeholderId"/>*/}
                            <h1 id="nameId" className="text-center">Никита
                                Цыганюк</h1>
                            <button className="btn btn-primary" type="button" id="addPatientButton">Добавить
                                пациента
                            </button>
                        </td>
                        <td>
                            <div></div>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Фамилия</th>
                                        <th>Имя</th>
                                        <th>Диагноз</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.doctors.map((doctor,index) => (
                                        <tr key={index} data-item={doctor.userId} onClick={this.onClickPatient}>
                                            <td>{doctor.lastname}</td>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.diagnosis}</td>
                                        </tr>
                                        )
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr></tr>
                    </tbody>
                </table>
            </div>
            {/*<h2 className="text-center">List Doctors</h2>*/}
            {/*<table className="table table-bordered table-striped">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope="col">Doctor Id</th>*/}
            {/*        <th scope="col">Name</th>*/}
            {/*        <th scope="col">Last name</th>*/}
            {/*        <th scope="col">Email</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {*/}
            {/*        doctors.map(*/}
            {/*            doctor =>*/}
            {/*                <tr key={doctor.userId}>*/}
            {/*                    <td> {doctor.userId}</td>*/}
            {/*                    <td> {doctor.name}</td>*/}
            {/*                    <td> {doctor.lastname}</td>*/}
            {/*                    <td> {doctor.email}</td>*/}
            {/*                </tr>*/}
            {/*        )*/}
            {/*    }*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            {/*<button type="button" className="btn btn-primary">Primary</button>*/}

        </div>

    );
}
};

