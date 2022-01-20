import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import Table from './components/Table/Table';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} exact={true} />
          <Route path='/table' element={<Table />} exact={true} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
