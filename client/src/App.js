import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Edit from './setting/Edit';
import Editor from './setting/Editor';
import Error from './components/Error';
import Resume from './components/Resume';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Contact from "./page/Contact"
import About from "./page/About"
import Protect from './components/Protect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/editor' element={<Protect Component={ Editor }/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contact' element={<Protect Component={Contact} />} />
        <Route path='/about' element={<About/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
