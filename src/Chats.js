import React from 'react';
import Chat from './Chat'
import "./Chats.css";

function Chats( ) {
    return(
        <div className="chats">
            <Chat
                name="Mark"
                message="YOYO"
                timestamp="10 min ago"
                profilePic="https://www.biography.com/.image/t_share/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
            />
            <Chat
                name="Tom from CN"
                message="hey Tom"
                timestamp="20 min ago"
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUgxAKADkPlmeN7IxoiUa5aIBAG3NjubkanA&usqp=CAU"
            />
        </div>
    )
}

export default Chats;