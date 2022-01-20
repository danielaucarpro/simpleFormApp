import { useState } from 'react';
import JsonSearch from 'search-array';
import './Table.css';

const Table = () => {

    const studentList = JSON.parse(localStorage.getItem('students'));
    const searcher = new JsonSearch(studentList);
    console.log(studentList);
    const [state, setState] = useState(studentList);
    const [search, setSearch] = useState();

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
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;