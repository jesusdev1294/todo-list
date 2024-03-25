import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Importar archivo CSS para estilos

const Login = ({setLogin, setIsTodo}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const getStatus = (status,token) =>{
    if(status===200 && token){
        setIsTodo(true);
        setLogin(false);
    }else {
        setIsTodo(false);
        setLogin(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        username,
        email,
        password
      });
      getStatus(response.status,response.data.token);
      setError('');
    } catch (error) {
      setLogin(true); 
      setIsTodo(false);
      setError('Credenciales inválidas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre de usuario:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Contraseña:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      
    </div>
  );
};

export default Login;

