import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import NoteDetail from "./pages/NoteDetail";
import Navbar from "./components/Navbar";
import CreateUpdate from "./pages/CreateUpdate";
function App() {
  return (
    <>
      <Routes>
        <Route path="/create" element={<CreateUpdate />} />
        <Route path="/create/:id" element={<CreateUpdate />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
