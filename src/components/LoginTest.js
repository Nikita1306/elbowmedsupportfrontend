import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {Navigate, useHistory, useNavigate} from "react-router-dom";
import "../assets/bootstrap/css/bootstrap.min.css"
import "../assets/css/Login-Form-Clean.css"
import "../assets/css/styles.css"
import '../index.css'
import '../styles.css'


import AuthService from "../services/authService";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            redirect: null,
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    // routeChange=()=> {
    //     let path = `doctor`;
    //     let history = useHistory();
    //     history.push(path);
    // }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        //this.form.validateAll();
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    console.log("login");
                    this.setState({redirect: "/doctor/profile"})
                    // this.routeChange();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );

    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect}/>
        }
        return (
            <div className="col-md-12">
                <div className="login-clean">
                    <form method="post"
                          onSubmit={this.handleLogin}>
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"></div>
                        <div className="form-group">
                            <input className="form-control"
                                   type="text"
                                   value={this.state.username}
                                   onChange={this.onChangeUsername}
                                   validations={[required]}
                                   name="username"
                                   placeholder="Login" /></div>
                        <div className="form-group">
                            <input className="form-control"
                                   type="password"
                                   name="password"
                                   value={this.state.password}
                                   onChange={this.onChangePassword}
                                   validations={[required]}
                                   placeholder="Password" /></div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block"
                                    disabled={this.state.loading}
                                    type="submit">Log In
                            </button>
                        </div>
                        <a className="forgot" href="#">Forgot your email or password?</a></form>
                </div>
                {/*<div className="card card-container">*/}
                {/*    <img*/}
                {/*        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"*/}
                {/*        alt="profile-img"*/}
                {/*        className="profile-img-card"*/}
                {/*    />*/}

                {/*    <Form*/}
                {/*        onSubmit={this.handleLogin}*/}
                {/*        ref={c => {*/}
                {/*            this.form = c;*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <div className="form-group">*/}
                {/*            <label htmlFor="username">Username</label>*/}
                {/*            <Input*/}
                {/*                type="text"*/}
                {/*                className="form-control"*/}
                {/*                name="username"*/}
                {/*                value={this.state.username}*/}
                {/*                onChange={this.onChangeUsername}*/}
                {/*                validations={[required]}*/}
                {/*            />*/}
                {/*        </div>*/}

                {/*        <div className="form-group">*/}
                {/*            <label htmlFor="password">Password</label>*/}
                {/*            <Input*/}
                {/*                type="password"*/}
                {/*                className="form-control"*/}
                {/*                name="password"*/}
                {/*                value={this.state.password}*/}
                {/*                onChange={this.onChangePassword}*/}
                {/*                validations={[required]}*/}
                {/*            />*/}
                {/*        </div>*/}

                {/*        <div className="form-group">*/}
                {/*            <button*/}
                {/*                className="btn btn-primary btn-block"*/}
                {/*                disabled={this.state.loading}*/}
                {/*            >*/}
                {/*                {this.state.loading && (*/}
                {/*                    <span className="spinner-border spinner-border-sm"></span>*/}
                {/*                )}*/}
                {/*                <span>Login</span>*/}
                {/*            </button>*/}
                {/*        </div>*/}

                {/*        {this.state.message && (*/}
                {/*            <div className="form-group">*/}
                {/*                <div className="alert alert-danger" role="alert">*/}
                {/*                    {this.state.message}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        )}*/}
                {/*        <CheckButton*/}
                {/*            style={{ display: "none" }}*/}
                {/*            ref={c => {*/}
                {/*                this.checkBtn = c;*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </Form>*/}
                {/*</div>*/}
            </div>
        );
    }
}