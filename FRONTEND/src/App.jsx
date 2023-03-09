import React, { useEffect } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import Note from "./component/Note";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/login'
import Signup from "./pages/signup";
import CreateArea from "./component/createArea";
import axios from 'axios'
import { useAuthContext } from "./pages/useAuthContext";
import './App.css';
const BASE_URl=process.env.REACT_APP_BASE_URL;

function App() {
  const [notes, setNotes] = React.useState([]);
  const { user } = useAuthContext()
  // will be evoked for the every load 
  useEffect(() => {
   
    if (user) {
      axios.get(`${BASE_URl}/`, {
        headers: { 'Authorization': `Bearer ${user.token}` },
      })
        .then(res => {

          setNotes(res.data);

        })
        .catch(err => {
          console.log(err);
        })
    }
  },[user]);
  function addNote(newNote) {
    if(!user)
    {
      console.log("logg in first")
      return;
    }
    console.log(newNote)
    axios.post(`${BASE_URl}/`, newNote, {
      headers: { 'Authorization': `Bearer ${user.token}` },
    })
      .then(posts => {
        setNotes(curr => {
          return [...curr, posts.data]
        })
      }).catch(err => {
        console.log(err);
      })

  }

  function deleteNote(id) {
    console.log(id)
    axios.delete(`${BASE_URl}/${id}`,{
      headers: { 'Authorization': `Bearer ${user.token}` },
    }).then(res => console.log(res.data)).catch(err => console.log(err));
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem._id !== id;
      });
    });
  }
  const Finall = () => {
    return (<div>
      <CreateArea onAdd={addNote} />
      {user && <div>{notes.map((noteItem) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}</div>}
    </div>)
  }
  return (
    <div>
      <BrowserRouter>
        <Header />


        <Routes>
          
          <Route path='/' element={
            user ?<Finall />:<Navigate to='/login'/>
          } />
          <Route path="/login" element={ !user?<Login />:<Navigate to='/'/>} />
          <Route path="/signup" element={!user?<Signup />:<Navigate to='/'/>} />

        </Routes>

      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
