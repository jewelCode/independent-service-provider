import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Main from './components/Shared/Main/Main';
import NotFound from './components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/checkout" element={
              <RequireAuth>
                  <CheckOut></CheckOut>
              </RequireAuth>}>
            </Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
