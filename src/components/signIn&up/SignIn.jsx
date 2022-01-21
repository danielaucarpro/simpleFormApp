import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

    let navigate = useNavigate();

    const usersList = JSON.parse(localStorage.getItem('users'));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (event) => {
        event.preventDefault();

        let findUser = usersList.find((user) => user.email === email);
        console.log(findUser);

        if (findUser) {
            if (password !== findUser.password) {
                alert("Password doesn't match! Please try again");
            } else {
                alert('Welcome back!');
                navigate('/addStudent', { replace: true });
            }
        } else {
            alert('User not found!');
        }
    }

    return (
        <form onSubmit={submitForm}>
            <h1>Sign In</h1>
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
            <button type='submit'>Login</button>
            <Link to='/signup'>New user? Sign Up</Link>
        </form>
    );
}

export default SignIn;