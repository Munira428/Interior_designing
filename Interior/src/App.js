import './App.css';
import { Contact } from './contact/contact';
import { Header } from './headerFooter/header';
import { Team } from './team/team';
import { Home } from './home/home';
import { Project } from './project/project';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/team' element={<Team/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
