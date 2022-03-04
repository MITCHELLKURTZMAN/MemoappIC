import NotesList from "./components/NotesList";
import {nanoid} from 'nanoid';
import {useState, useEffect} from "react";
import React from 'react';



const App = () => {
  
  const [notes, setNotes] = useState([
  
  ]);

  useEffect(()=> {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  


  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes),
    );
  }, [notes]);



 

  const addNote = (text) => {
    const date = new Date();
    const newNote= {

      id: nanoid(),
      text: text, 
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
   const newNotes = notes.filter((note) => note.id !== id);
   setNotes(newNotes);
    }

  return (
  
  <div className="container">
    
    <NotesList 
    notes={notes}
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    />
  </div>
  );

  
};

export default App;
