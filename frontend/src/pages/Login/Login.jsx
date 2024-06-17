import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [contrasenia, setcontrasenia] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = { correo, contrasenia };

        const response = await login(credentials);

        console.log(response);

        if (response.state) {
            Swal.fire({
                title: 'Inicio de sesión!',
                text: `Bienvenido ${response.usuario.nombre}`,
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                navigate('/home', {
                    replace: true
                });
            });


        } else {
            Swal.fire({
                title: 'Error!',
                text: `${response.message}`,
                icon: 'error',
                confirmButtonText: 'Ok'
            });

        }
    };

    return (
        <div className="login-container">
            <h2>Login MediCare</h2>
            <form onSubmit={handleSubmit}>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    autoComplete="email"
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    value={contrasenia}
                    onChange={(e) => setcontrasenia(e.target.value)}
                    autoComplete="current-password"
                />
                <button type="submit">Login</button>
            </form>
            <p>No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
    );
};

export default Login;
