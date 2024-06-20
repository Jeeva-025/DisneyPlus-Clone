
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Details';

function App() {
  return (
   <div className='App'>
   <BrowserRouter>
    <Header/>   
   <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route  path="/home" element={<Home/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
            
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
