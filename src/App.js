import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import SechGrahok from './Pages/SechGrahok';
import SkimManager from './Pages/SkimManager';
import Kormokorta from './Pages/Kormokorta';
import BartaProdan from './Pages/BartaProdan';
import KormoPorikolpona from './Pages/KormoPorikolpona';
import PhoneBook from './Pages/PhoneBook';
import Remindar from './Pages/Remindar';
import Archieve from './Pages/Archieve';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/irrigation-customers' element={<SechGrahok />} />
          <Route path='/skim-Managers' element={<SkimManager />} />
          <Route path='/officers-employees' element={<Kormokorta />} />
          <Route path='/send-sms' element={<BartaProdan />} />
          <Route path='/action-plan' element={<KormoPorikolpona />} />
          <Route path='/phoneBook' element={<PhoneBook />} />
          <Route path='/remindar' element={<Remindar />} />
          <Route path='/archieve' element={<Archieve />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
