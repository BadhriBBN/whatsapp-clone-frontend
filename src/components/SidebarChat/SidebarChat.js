import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import { Avatar} from '@mui/material';
import axios from 'axios';
import {Link} from 'react-router-dom';

const SidebarChat = ({ addNewChat, name, id }) => {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = async () => {
    const roomName = prompt('Please enter name for the group');
    if (roomName) {
      try {
        await axios.post('https://whatsapp-clone-backend-3ytx.onrender.com/group/create', {
          groupName: roomName,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
