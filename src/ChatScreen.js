import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen (){
    const [input,setInput] =useState('');
    const [messages,setMesaaages] =useState([
            {
                name:'Mark',
                image:'https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg',
                message:'Hey man'
            },
            {
                name:'Mark',
                image:'https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg',
                message:'Whatsapp'
            },
            {
                message:'I am fine'
            },
        ]);

    const handleSend = (e) => {
        e.preventDefault();
        
        setMesaaages ([...messages,{message: input }]);
        setInput('');
    }

    return(
        <div className="chatScreen">
            <p className="chatScreen__date">Today</p>
            
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )}
            <div>
                <form  className="chatScreen__input">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="chatScreen__inputbox"
                        placeholder="Type a messages" 
                        type="text" 
                    />
                    <button 
                        onClick={handleSend}
                        className="chatScreen__inputbutton">SEND</button>
                </form>
            </div>
        </div>
        
        
    )
}

export default ChatScreen;