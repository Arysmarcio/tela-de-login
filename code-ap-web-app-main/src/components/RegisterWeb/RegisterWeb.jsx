import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register-web.css';
import logo from "../../assets/images/marcopolo_logo.png";


function RegistrationForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

     const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, confirmPassword})
     });

     if (response.ok) {
      navigate('/sucess')
     } else {

      console.error('Failed to register')
     }
  };

  return (
    <div>
      <img className="logo" src={logo} alt="marcopolo_logo" />
      <form onSubmit={handleSubmit}>
        <div className="title"><span>Novo usuário</span></div>
        <input
          className='input-text'
          type="text"
          placeholder="Ex: fulano123"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="title"><span>E-mail</span></div>
        <input
          className='input-text'
          type="email"
          placeholder="Ex: fulanodasilva@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="title"><span>Senha</span></div>
        <input
          className='input-text'
          type="password"
          placeholder="Ex: segredo123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="title"><span>Confirmar senha</span></div>
        <input
          className='input-text'
          type="password"
          placeholder="Confirmar senha acima"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="button">
          CADASTRAR-SE
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
