import React, {Component, useEffect, useState} from 'react';
import DoctorService from "../services/DoctorService";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import authHeader from "../services/authHeader";

export default class DoctorProfile extends Component{

    constructor(props) {
        super(props);
        console.log(DoctorService.getCurrentUser());

        this.editOnClickListener = this.editOnClickListener.bind(this);
        this.state = {
            doctor: [],
            readOnly: true,
            userId: ""
        }
        DoctorService.getCurrentDoctor().then((response) => {
            console.log(response);
            this.setState({doctor: response.data})
            //setDoctors(response.data)
            console.log(this.state.doctor);
        })
    }
    componentDidMount() {
        this.changeReadOnly(true)
        console.log("component mount")


    }
    changeReadOnly (readOnly) {

        var x = document.getElementsByTagName("input");
            for ( var counter = 0; counter < x.length; counter++)
            {
                console.log(x.item(counter).value)
                x.item(counter).readOnly = readOnly;
                console.log(x.item(counter).value + " changeReadOnly = " + x.item(counter).readOnly)
            }

    }

    async editOnClickListener() {
        var x = document.getElementById("doctorEditButtonId");
        console.log("On edit")
        if (x.textContent === "Редактировать") {

            console.log("Редактировать")
            console.log(this.state.readOnly)
            this.changeReadOnly(false)
            x.textContent = "Сохранить"

        } else {
            await axios.get("http://localhost:8080/doctor/myProfile", {headers: authHeader()})
                .then(response => {
                    console.log(response.data.userId);
                    this.setState({userId: response.data.userId})
                    console.log(this.state.userId)
                })
            var updateInfo = {
                lastname: document.getElementById("inputSurnameId").value,
                name:  document.getElementById("inputNameId").value,
                email: document.getElementById("inputEmailId").value,
                workExperience: document.getElementById("inputWorkExpId").value,
                post:  document.getElementById("inputPostId").value,
                phone: document.getElementById("inputPhoneId").value
            }
            //axios.patch("http://localhost:8080/doctor/" + id + "/update", updateInfo, {headers: authHeader()})

            await DoctorService.updateDoctorInfo(updateInfo, this.state.userId).then(response =>
                console.log(response.data)
            );
            console.log(document.getElementById("inputSurnameId").value)
            console.log(updateInfo)
            this.setState({readOnly: true})
            this.changeReadOnly(true)
            x.textContent = "Редактировать"
        }
    }

    render() {
        return (
            <div className="container">
                <Navbar/>
                <div className="table-responsive">
                    <table id="profileTableI" className="table">
                        <thead>
                        <tr></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td id="nameProfileId"><img
                                // style="margin-left: 32px;margin-top: 32px;width: 180px;height: 180px;"
                            />
                                <h1 id="nameId" className="text-center"
                                    // style="width: 180px;margin-left: 32px;margin-top: 16px;font-size: 22px;margin-left: 32px;margin-top: 16px;font-size: 22px;"
                                >{this.state.doctor.lastname + " " + this.state.doctor.name}</h1>
                                <button id="doctorEditButtonId" onClick={this.editOnClickListener} className="btn btn-primary" type="button"
                                >Редактировать
                                </button>
                            </td>
                            <td id="profileInfoId">
                                <div>
                                    <div className="row">
                                        <div className="col">
                                            <div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="text-left card-title">Фамилия</h4>
                                                                <input className="inputButtons" type="text" id="inputSurnameId" defaultValue={this.state.doctor.lastname} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="text-left card-title">Имя</h4>
                                                                <input className="inputButtons" type="text" id="inputNameId" defaultValue={this.state.doctor.name}/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="text-left card-title">Электронная почта</h4>
                                                                <input className="inputButtons" type="text" id="inputEmailId" defaultValue={this.state.doctor.email}/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="text-left card-title">Должность</h4>
                                                                <input className="inputButtons" type="text" id="inputPostId" defaultValue={this.state.doctor.post}/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="text-left card-title">Опыт работы</h4>
                                                                <input className="inputButtons" type="text" id="inputWorkExpId" defaultValue={this.state.doctor.workExperience}/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="text-left card-title">Мобильный телефон</h4>
                                                                <input className="inputButtons" type="text" id="inputPhoneId" defaultValue={this.state.doctor.phone} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
};

