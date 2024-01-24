import { useEffect, useState } from "react";
import NoteList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [oneTime, setOneTime] = useState(true);
  const [notes, setNotes] = useState(
    //   [
    //   {
    //     id: nanoid(),
    //     text: "This is my first note!",
    //     date: "15/04/2021",
    //   },
    //   {
    //     id: nanoid(),
    //     text: "This is my second note!",
    //     date: "15/05/2021",
    //   },
    //   {
    //     id: nanoid(),
    //     text: "This is my third note!",
    //     date: "15/05/2021",
    //   },
    //   {
    //     id: nanoid(),
    //     text: "This is my fourth note!",
    //     date: "15/05/2021",
    //   },
    // ]
    JSON.parse(localStorage.getItem("react-notes-app-data"))
  );
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
  //   if (savedNotes) {
  //     setNotes(savedNotes);
  //   }
  // }, []);
  // console.log(notes);
  useEffect(() => {
    console.log(notes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      <div className={`container`}>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
