import { useState } from 'react';
import { register } from '../../services/authService';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            correo: email,
            contrasenia: password,
            nombre: firstName,
            apellido: lastName
        };
        const response = await register(data);
        console.log(response);
        if (response.state) {
            Swal.fire({
                title: 'Registro Usuario!',
                text: 'Usuario registrado correctamente.',
                icon: 'success',
                confirmButtonText: 'Ok'    
            })
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
        <div className="register-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="fistName"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <button id="btnRegister" type="submit">Register</button>
            </form>
            <p>Ya tiene una cuenta? <Link to="/login">Ingresa</Link></p>
        </div>
    );
};

export default Register;