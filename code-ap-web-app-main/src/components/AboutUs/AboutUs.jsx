import React from "react";
import backButton from "../../assets/images/BackButtonO.png";
import { useNavigate } from 'react-router-dom';
import cordelCactus from "../../assets/images/cacto.png";
import cordelCap from "../../assets/images/chapeu_cangaceiro.png";
import cordelDood from "../../assets/images/person.png";
import './about-us.css';

const AboutScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="container_about">
            <div className="header_about">
                <button onClick={() => navigate(-1)} className="backButton">
                    <img src={backButton} className="button_image_about" alt="Back" />
                </button>
            </div>
            <div className="body_about">
                <h1 className="title_about">SOBRE NÓS</h1>
                <p className="text_about">Com uma abordagem interativa e intuitiva dos pontos turísticos de nosso centro pernambucano, a equipe (S)CRYPT surgiu com a inovação de tirar os conhecimentos dos livros e trazê-los aos toques do turista e do recifense.</p>
                {/* <img src={cordelDood} alt="Cordel Dood" className="images_about" /> */}
                <p className="text_about">Por meio de um sistema de GPS e por meio de um celular, o presente aplicativo entrega a possibilidade de visita presencial a pontos turísticos, fatos históricos, e itens digitais colecionáveis de raridade variada.</p>
                {/* <img src={cordelCap} alt="Cordel Cap" className="images_about" /> */}
                <p className="text_about">Quanto mais for desbravada a nossa querida capital, maiores as chances de obter os itens únicos!</p>
                {/* <img src={cordelCactus} alt="Cordel Cactus" className="images_about" /> */}
                <p className="text_about">A equipe (S)CRYPT tem compromisso em mostrar que a história, entretenimento e mobilidade devem andar juntos.</p>
            </div>
        </div>
    );
};

export default AboutScreen;
