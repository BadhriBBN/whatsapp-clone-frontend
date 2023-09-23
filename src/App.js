import React from 'react';
import './App.css';
import Login from './components/Login/login';
import { useStateValue } from './components/ContextApi/StateProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
