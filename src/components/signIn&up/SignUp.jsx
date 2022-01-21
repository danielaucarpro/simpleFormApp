import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {

    let navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCon, setPasswordCon] = useState('');

    const submitForm = () => {
        if (password !== passwordCon) {
            alert("Password doesn't match! Please try again");
        } else {
            let newUser = {
                userName: userName,
                email: email,
                password: password,
                id: Math.floor(Math.random() * 100)
            }

            //Setting local storage
            const userList = JSON.parse(localStorage.getItem('users'));

            //adding new student
            if (userList) {
                userList.push(newUser)
                localStorage.setItem('users', JSON.stringify(userList));
                navigate('/', { replace: true });
            } else {
                // If there is no user key present inside the localstorage
                localStorage.setItem('users', JSON.stringify([newUser]))
                navigate('/', { replace: true });
            }
        }
    }

    return (
        <form onSubmit={submitForm}>
            <h1>Sign Up</h1>
            <div className="form-control">
                <label htmlFor="userName">User name: </label>
                <input
                    type="text"
                    placeholder='Enter your name...'
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    placeholder='Enter your email...'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    placeholder='Enter your password...'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input
                    type="password"
                    placeholder='Confirm your password...'
                    value={passwordCon}
                    onChange={(event) => setPasswordCon(event.target.value)}
                    required
                />
            </div>
            <button type='submit'>Submit</button>
            <Link to='/'>Already a user? Login</Link>
        </form>
    );
}

export default SignUp;