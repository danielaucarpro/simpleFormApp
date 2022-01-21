import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UpdateForm = (props) => {

    console.log(props, 'props');

    let navigate = useNavigate();

    //new form
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newCollege, setNewCollege] = useState('');
    const [newCourse, setNewCourse] = useState('');

    const submitNewForm = (event) => {
        event.preventDefault();
        alert('new data ok');
        navigate('/table', { replace: true });
    }

    return (
        <form onSubmit={submitNewForm}>
            <div className="form-control">
                <label htmlFor="newName">New name: </label>
                <input
                    type="text"
                    placeholder='Enter your new name...'
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="newEmail">New email: </label>
                <input
                    type="email"
                    placeholder='Enter your new email...'
                    value={newEmail}
                    onChange={(event) => setNewEmail(event.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="newCollege">New college: </label>
                <input
                    type="text"
                    placeholder='Enter your new college...'
                    value={newCollege}
                    onChange={(event) => setNewCollege(event.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="newCourse">New course: </label>
                <input
                    type="text"
                    placeholder='Enter your new course...'
                    value={newCourse}
                    onChange={(event) => setNewCourse(event.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    );
}

export default UpdateForm;