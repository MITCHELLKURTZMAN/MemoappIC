import React from 'react';

const Note = ({id, text, date, handleDeleteNote, time}) => {
    return <div className= "note">
       
        <span>{text}</span>
        
        <div className= "note-footer">
            <div className= "time">
                <div><span>{date}</span></div>
                <div><small>{time}</small></div>
                
                </div>

            
            <div className="id"><small> Id: {id.slice(0,5)}</small></div>
        <button 
        className= "delete"
        onClick={() => handleDeleteNote(id)}
        >Delete</button>
        
        </div>
    </div>;
};

export default Note;