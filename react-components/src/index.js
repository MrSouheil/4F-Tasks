import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Square from './components/Square'
import GridOfSquares from './components/GridOfSquares';
import Note from './components/Note';
import NoteList from './components/NotesArray';
import Form from './components/Form';

const noteObject = {
  id: 1,
  content: 'This is a sample note.',
  author: 'John Doe',
  profilePic: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
};

const arrayOfNotes = [
  {
    id: 1,
    content: 'This is note 1.',
    author: 'John Doe',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
  },
  {
    id: 2,
    content: 'This is note 2.',
    author: 'Jane Doe',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Square/>
    <GridOfSquares gridSize={10}/>
    <Note noteObject={noteObject} />
    <NoteList notes={arrayOfNotes} />
    <Form/>
    </>
  </React.StrictMode>
);
