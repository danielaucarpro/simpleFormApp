import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import Table from './components/Table/Table';
import SignUp from "./components/signIn&up/SignUp";
import SignIn from "./components/signIn&up/SignIn";
import UpdateForm from './components/Table/UpdateForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} exact={true} />
          <Route path='/signup' element={<SignUp />} exact={true} />
          <Route path='/addStudent' element={<Form />} exact={true} />
          <Route path='/updateStudent' element={<UpdateForm />} exact={true} />
          <Route path='/table' element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
