import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
 
import App from './oo.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home.jsx';
import Appointments from '../screens/Appointments.jsx';
import Schedule from '../screens/Schedule.jsx';
import Patients from '../screens/Patient.jsx';
import Profile from '../screens/Profile.jsx';
import Messagebox from '../screens/Messagebox.jsx';
import Logout from '../screens/Logout.jsx';
import Message from '../screens/Message.jsx';

const DoctorDashboards = () => {
  return (
    
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="patients" element={<Patients />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messagebox" element={<Messagebox />} />
          <Route path="message" element={<Message />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    
  );
};
export default DoctorDashboards;