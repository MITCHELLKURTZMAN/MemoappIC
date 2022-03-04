import {useState} from 'react';
import React from 'react';
const AddNote = ({handleAddNote}) => {

    const[noteText, setNoteText] = useState('');
    const handleChange = (event) => {
        setNoteText(event.target.value);
        //enable disable save
    };

    const handleSaveClick = () => {
        handleAddNote(noteText);
        setNoteText('');
    }

    const handleNew = () => {
        if (window.confirm('Your changes are unsaved, your note will be lost!')) {
            setNoteText('');
    }}

    // const dontsaveempty = () => {
    //     if (noteText == false){
    //     console.log("Save button is hidden") 
    //     }
    //     else{
         
    // }

    return (
        
        <div className= 'note new'>
        <textarea 
            rows='8'
            cols='10'
            placeholder='Add Memo'
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="note-footer">
            
            <button className="save" onClick={handleSaveClick}> Save </button>
            <button className="newnote" onClick={handleNew}>+</button>
            </div>
        </div>
        
    );
};

export default AddNote;