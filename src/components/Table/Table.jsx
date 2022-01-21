import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import JsonSearch from 'search-array';

import UpdateForm from './UpdateForm';

import './Table.css';

const Table = () => {

    let navigate = useNavigate();

    const studentList = JSON.parse(localStorage.getItem('students'));

    const searcher = new JsonSearch(studentList);
    console.log(studentList);

    const [state, setState] = useState(studentList);
    const [search, setSearch] = useState();
    const [studentToUpdate, setStudentToUpdate] = useState();
    const [isUpdating, setIsUpdating] = useState(false);

    const searchStudent = (event) => {
        event.preventDefault();
        let findStudent = [studentList.find((student) => student.name === search)];
        console.log(findStudent);
        setState(findStudent);
        // let foundStudents = searcher.query(search);
        // console.log(foundStudents);
    }

    const resetTable = (event) => {
        event.preventDefault();
        setState(studentList);
    }

    const deleteMe = (studentID) => {
        // console.log(studentID);

        let index = studentList.findIndex((student) => student.id === studentID);
        if (index !== -1) {
            let newArray = studentList.splice(index, 1);
            console.log(newArray);
            setState(newArray);
            // console.log(studentsArray);
        }
    }

    const updateMe = (studentId) => {
        setIsUpdating(true);
        let foudStudent = studentList.find((student) => student.id === studentId);
        console.log(foudStudent, 'update me');
        setStudentToUpdate(studentToUpdate);
        // navigate('/updateStudent', { replace: true });
    }

    return (
        <>
            <div className="table-container">
                <div className="search-container">
                    <input
                        type="search"
                        name="" id=""
                        className='searchInput'
                        onChange={(event) => setSearch(event.target.value)}
                        value={search}
                    />
                    <button onClick={searchStudent}>Search</button>
                    <button onClick={resetTable}>Reset</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>College</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody id="result">
                        {/* <tr>
                            <td>Daniel</td>
                            <td>daniel@gmail.com</td>
                            <td>CICCC</td>
                            <td>WMAD</td>
                        </tr> */}
                        {state.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.college}</td>
                                    <td>{student.course}</td>
                                    <td>
                                        <button onClick={() => { deleteMe(student.id) }}>X</button>
                                    </td>
                                    <td>
                                        <button onClick={() => { updateMe(student.id) }}>Update</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {isUpdating ? <UpdateForm student= {{studentToUpdate}} /> : ''}
                <Link to='/'>Go back</Link>
            </div>
        </>
    );
}

export default Table;