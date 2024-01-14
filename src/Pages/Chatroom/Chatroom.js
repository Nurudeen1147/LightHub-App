import React, { useEffect, useState } from 'react';
import { Paper, Toolbar, Typography, TextField, Button, AppBar } from '@mui/material';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const Chatroom = () => {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    useEffect(() => {
      // Receive new messages
      socket.on('receiveMessage', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
  
      // Receive existing chat history
      socket.on('chatHistory', (chatHistory) => {
        setMessages(chatHistory);
      });
  
      // Clean up the socket connection
      return () => {
        socket.disconnect();
      };
    }, []);
  
    const handleMessageChange = (event) => {
      setNewMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      if (newMessage.trim() !== '') {
        const message = {
          user: 'Student', // You can customize the user name or use a logged-in user's name
          content: newMessage,
          timestamp: new Date().toISOString(),
        };
        socket.emit('sendMessage', message);
        setNewMessage('');
      }
    };
  
    return (
      <Paper sx={{ width: 600, margin: 'auto', marginTop: 1, padding: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Chatroom</Typography>
        </Toolbar>
      </AppBar>
        <div style={{ height: 10, overflowY: 'auto', marginBottom: 3 }}>
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: 3 }}>
              <strong>{message.user}:</strong> {message.content}
            </div>
          ))}
        </div>
        <TextField
          margin="dense"
          label="Received Message(s)"
          type="text"
          fullWidth
          multiline
          rows={6}
          onChange={handleMessageChange}
          sx={{ marginBottom: 3 }}
        />
        <TextField
          label="Type message"
          variant="outlined"
          value={newMessage}
          onChange={handleMessageChange}
          fullWidth
          sx={{ marginBottom: 3 }}
        />
        <Button variant="contained" onClick={handleSendMessage} sx={{ marginBottom: -1 }}>
          Send
        </Button>
      </Paper>
    );
  };
  
export default Chatroom;