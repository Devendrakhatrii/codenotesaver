import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    create: (state, action) => {
      state.notes.push(action.payload);
      toast.success("Note Added!");
    },
    delete: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      toast.error("Deleted!");
    },
    update: (state, action) => {
      console.log(action.payload);
      state.notes = state.notes.map((note) =>
        note.id === action?.payload?.id ? action?.payload : note
      );
      toast.success("Removed!");
    },
    clear: (state) => {
      state.notes = [];
      toast.success("Cleared All!");
    },
  },
});

export const { create, delete: deleteNote, update, clear } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
