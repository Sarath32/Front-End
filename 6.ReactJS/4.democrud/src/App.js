import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addcustomercomponent from './Components/Addcustomer';
import ListCustomer from './Components/Listallcustomers';
import Updatecustomercomponent from './Components/Updatecustomer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="APP">
        <Routes>
          <Route path='/' element={<ListCustomer></ListCustomer>}></Route>
          <Route path='/ListCustomer' element={<ListCustomer></ListCustomer>}></Route>
          <Route path='/add-customer' element={<Addcustomercomponent></Addcustomercomponent>}></Route>
          <Route path='/update-customer/:id' element={<Updatecustomercomponent></Updatecustomercomponent>}></Route>
        </Routes>

      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
