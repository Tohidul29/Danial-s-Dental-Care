import { Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Checkout from './Component/CheckOut/Checkout';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Register from './Component/Register/Register';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
