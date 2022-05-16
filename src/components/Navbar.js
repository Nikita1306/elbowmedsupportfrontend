import React from "react";
import {Link} from "react-router-dom";
import "../styles.css"
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                <div className="container">
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                        className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><a className="nav-link li" href="/about">О системе</a></li>
                            <li className="nav-item" role="presentation"><a id="PatientList" className="nav-link active"
                                                                            href="/doctor">Список
                                пациентов</a></li>

                            <li className="nav-item "  role="presentation">
                                <a className="nav-link li" id="myProfileNav" href="/doctor/profile">Мой профиль</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar