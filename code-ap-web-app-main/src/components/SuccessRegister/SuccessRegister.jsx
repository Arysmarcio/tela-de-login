import React from 'react';
import { useNavigate } from 'react-router-dom';
import backButton from "../../assets/images/BackButtonO.png";
import logo from "../../assets/images/marcopolo_logo.png";

function SuccessRegister() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="header_about">
                <button onClick={() => navigate(-1)} className="backButton">
                    <img src={backButton} className="button_image_about" alt="Back" />
                </button>
            </div>
            <img className="logo" src={logo} alt="marcopolo_logo" />
            <div>
                <h2 className='title'>USUÁRIO CADASTRADO COM SUCESSO</h2>
            </div>
        </div>
    );
}

export default SuccessRegister;
