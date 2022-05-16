import React, {Component, useEffect, useState} from 'react';
import DoctorService from "../services/DoctorService";
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import authHeader from "../services/authHeader";
//
import { Tabs, Tab } from "react-bootstrap";


export default class DoctorPatientComponent extends Component{

    constructor(props) {
        super(props);
        console.log(DoctorService.getCurrentUser());

       // this.editOnClickListener = this.editOnClickListener.bind(this);
        this.state = {
            doctor: [],
            readOnly: true,
            userId: ""
        }
        if (!DoctorService.getCurrentDoctor().then((response) => {
            console.log(response);
            this.setState({doctor: response.data})
            //setDoctors(response.data)
            console.log(this.state.doctor);
        }).catch(e => {
            console.log("error");
            console.log(e)
        }));
    }
    componentDidMount() {
       // this.changeReadOnly(true)
        console.log("component mount")
        console.log("DoctorPatient")

    }

    render() {
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
                            <td //style="min-width: none; max-width: 100px;"
                            >
                                <h1 id="nameId" className="text-left"
                                    // style="width: 25hw;margin-left: 32px;margin-top: 16px;font-size: 24px;"
                                >Никита
                                    Цыганюк</h1>
                                <button className="btn btn-primary" type="button"
                                        // style="margin-top: 16px;margin-left: 32px;min-width: none;padding-right: 24px;padding-left: 24px;"
                                >Добавить пациента
                                </button></td>
                            <td>
                                <div></div>
                                {/*<div className="table-responsive">*/}
                                {/*    <table className="table">*/}
                                {/*        <thead>*/}
                                {/*        <tr></tr>*/}
                                {/*        </thead>*/}
                                {/*        <tbody>*/}
                                {/*        <tr></tr>*/}
                                {/*        <tr></tr>*/}
                                {/*        <tr></tr>*/}
                                {/*        </tbody>*/}
                                {/*    </table>*/}
                                {/*</div>*/}
                                <div>
                                    {/*<ul className="nav nav-tabs">*/}
                                    {/*    <li className="nav-item"><a className="nav-link active" role="taFb"*/}
                                    {/*                                data-toggle="tab" href="#tab-1">Tab 1</a></li>*/}
                                    {/*    <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab"*/}
                                    {/*                                href="#tab-2">Tab 2</a></li>*/}
                                    {/*    <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab"*/}
                                    {/*                                href="#tab-3">Tab 3</a></li>*/}
                                    {/*</ul>*/}
                                    <Tabs className="smth" defaultActiveKey={1} id="controlled-tab-example" >
                                        <Tab eventKey={1} id="tabFirst" title="Основная информация">

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

                                        </Tab>
                                        <Tab eventKey={2} title="Анкеты">
                                            <p>Content for tab 2.</p>
                                        </Tab>
                                        <Tab eventKey={3} title="Tab 3"></Tab>
                                    </Tabs>
                                    {/*<div className="tab-content">*/}
                                    {/*    <div className="tab-pane active" role="tabpanel" id="tab-1">*/}
                                    {/*        <div className="card">*/}
                                    {/*            <div className="card-body">*/}
                                    {/*                <h4 className="text-center card-title">Фамилия</h4><input*/}
                                    {/*                type="text" id="inputSurnameId" /></div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="card">*/}
                                    {/*            <div className="card-body">*/}
                                    {/*                <h4 className="text-center card-title">Фамилия</h4><input*/}
                                    {/*                type="text" id="inputSurnameId" /></div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="card">*/}
                                    {/*            <div className="card-body">*/}
                                    {/*                <h4 className="text-center card-title">Фамилия</h4><input*/}
                                    {/*                type="text" id="inputSurnameId" /></div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="card">*/}
                                    {/*            <div className="card-body">*/}
                                    {/*                <h4 className="text-center card-title">Фамилия</h4><input*/}
                                    {/*                type="text" id="inputSurnameId" /></div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="card">*/}
                                    {/*            <div className="card-body">*/}
                                    {/*                <h4 className="text-center card-title">Фамилия</h4><input*/}
                                    {/*                type="text" id="inputSurnameId" /></div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="tab-pane" role="tabpanel" id="tab-2">*/}
                                    {/*        <p>Content for tab 2.</p>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="tab-pane" role="tabpanel" id="tab-3">*/}
                                    {/*        <p>Content for tab 3.</p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
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

