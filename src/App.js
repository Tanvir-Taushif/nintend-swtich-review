import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home> }></Route>
        <Route path="/home" element={ <Home></Home> }></Route>
        <Route path="/reviews" element={ <Reviews></Reviews> }></Route>
        <Route path="/dashboard" element={ <Dashboard></Dashboard> }></Route>
        <Route path="/blogs" element={ <Blogs></Blogs> }></Route>
        <Route path="/about" element={ <About></About> }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
