import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import SechGrahok from './Pages/SechGrahok';
import SkimManager from './Pages/SkimManager';
import Kormokorta from './Pages/Kormokorta';
import BartaProdan from './Pages/BartaProdan/BartaProdan';
import KormoPorikolpona from './Pages/KormoPorikolpona';
import PhoneBook from './Pages/PhoneBook/PhoneBook';
import Remindar from './Pages/Remindar';
import Archieve from './Pages/Archieve';

import DcOffice from './Pages/PhoneBook/PhonebookOffices/DcOffice';
import SpOffice from './Pages/PhoneBook/PhonebookOffices/SpOffice';
import AnsarOffice from './Pages/PhoneBook/PhonebookOffices/AnsarOffice';
import FireOffice from './Pages/PhoneBook/PhonebookOffices/FireOffice';
import JuboUnnoyon from './Pages/PhoneBook/PhonebookOffices/JuboUnnoyon';
import LandOffice from './Pages/PhoneBook/PhonebookOffices/LandOffice';
import Pbs from './Pages/PhoneBook/PhonebookOffices/Pbs';
import Pouroshova from './Pages/PhoneBook/PhonebookOffices/Pouroshova';
import RabOffice from './Pages/PhoneBook/PhonebookOffices/RabOffice';
import WdbOffice from './Pages/PhoneBook/PhonebookOffices/WdbOffice';
import ZilaPorishod from './Pages/PhoneBook/PhonebookOffices/ZilaPorishod';
import LgedOffice from './Pages/PhoneBook/PhonebookOffices/LgedOffice';

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

          <Route path='/dc-office' element={<DcOffice />} />
          <Route path='/sp-office' element={<SpOffice />} />
          <Route path='/ansar-office' element={<AnsarOffice />} />
          <Route path='/fire-office' element={<FireOffice />} />
          <Route path='/jubo-unnoyon' element={<JuboUnnoyon />} />
          <Route path='/land-office' element={<LandOffice />} />
          <Route path='/pbs' element={<Pbs />} />
          <Route path='/pourosova' element={<Pouroshova />} />
          <Route path='/rab-office' element={<RabOffice />} />
          <Route path='/wdb-office' element={<WdbOffice />} />
          <Route path='/zila-porishod' element={<ZilaPorishod />} />
          <Route path='/lged-office' element={<LgedOffice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
