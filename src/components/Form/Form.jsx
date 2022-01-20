import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Form.css';

const Form = () => {

    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [course, setCourse] = useState('');

    const submitForm = (event) => {
        event.preventDefault();

        alert('Form submitted');

        let newStudent = {
            name: name,
            email: email,
            college: college,
            course: course,
            id:  Math.floor(Math.random() * 100)
        }

        //Setting local storage
        const studenList = JSON.parse(localStorage.getItem('students'));
        //adding new student
        if (studenList) {
            studenList.push(newStudent)
            localStorage.setItem('students', JSON.stringify(studenList));
            navigate('/table', { replace: true });
        } else {
            // If there is no user key present inside the localstorage
            localStorage.setItem('students', JSON.stringify([newStudent]))
            navigate('/table', { replace: true });
        }
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <h1>Student Form</h1>
                <div className="form-control">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        placeholder='Enter your name...'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
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
                    <label htmlFor="college">College: </label>
                    <input
                        type="text"
                        placeholder='Enter your college...'
                        value={college}
                        onChange={(event) => setCollege(event.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="course">Course: </label>
                    <input
                        type="text"
                        placeholder='Enter your course...'
                        value={course}
                        onChange={(event) => setCourse(event.target.value)}
                        required
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default Form;