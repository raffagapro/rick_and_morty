import { useState } from 'react';
import Styles from './Form.module.css';
import validation from '../../utils/validation';
const {
    container,
    form,
    warning
} = Styles;

export default function Form({ login }) {
    //estado local
    const [ userData, setUserData ] = useState({
        username:'',
        password:''
    })

    const [errors, setErrors] = useState({
        username: '', 
        password: '' 
    })

    // const handleInputSubmit = (e)=>{
    //     e.preventDefault();

    //     setUserData({
    //         ...userData,
    //         [e.target.name] : e.target.value
    //     });
    // };

    const handleChange = (e)=>{
        //lo valido antes de mandarlo al estado local
        setErrors(
            validation({
                ...userData,
                [e.target.name] : e.target.value
            })
        );
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        });
    };


    return (
        <div className={container}>
            <form className={form} onSubmit={()=>{login(userData)}}>
                <label>Username:</label>
                <input
                    type='text'
                    name='username'
                    value={userData.username}
                    onChange={handleChange}
                    className={errors.username && warning}
                />
                { errors.username ? <span className={warning}>{errors.username}</span>: undefined}

                <label>Password:</label>
                <input
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange}
                    className={errors.password && warning}
                />
                { errors.password ? <span className={warning}>{errors.password}</span>: undefined}
                <button>Login</button>
            </form>
        </div>
    )
 }