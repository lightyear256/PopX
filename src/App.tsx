import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Account from './Pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>} ></Route>
        <Route path={'/signup'} element={<Signup/>} ></Route>
        <Route path={'/signin'} element={<Signin/>} ></Route>
        <Route path={'/user'} element={<Account/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
