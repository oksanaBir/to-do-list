import { CHANGE_NOTE_COLOR, CHANGE_NOTE_EDITABLE, CHANGE_NOTE_TITLE, CHANGE_NOTE_DESCRIPTION, CHANGE_NOTE_DATE, CHANGE_SORT_DIRECTION, CHANGE_SORT_FIELD, CREATE_NOTE, DELETE_NOTE } from './actionTypes';

export const changeNoteColor = (noteId, activeColor) => ({  
    type: CHANGE_NOTE_COLOR,
    color: activeColor,
    noteId
});

export const changeNoteEditable = (isEditable, noteId) => ({
    type: CHANGE_NOTE_EDITABLE,
    isEditable: isEditable,
    noteId,
});

export const changeNoteTitle = (noteId, value) => ({
    type: CHANGE_NOTE_TITLE,
    noteId,
    title: value,
    titleValidation: !(value.length === 0 || !value.trim()),
});

export const changeNoteDescription = (noteId, value) => ({
    type: CHANGE_NOTE_DESCRIPTION,
    description: value,
    noteId
});

export const changeNoteDate = (noteId, date) => ({
    type: CHANGE_NOTE_DATE,
    completionDate: date,
    completionDateValidation: date !== undefined,
    noteId
});

export const changeSortDirection = value => ({
    type: CHANGE_SORT_DIRECTION,
    sortDirection: value
});

export const changeSortField = value => ({
    type: CHANGE_SORT_FIELD,
    sortField: value
});

export const deleteNote = noteId => ({
    type: DELETE_NOTE,
    noteId,
});

export const createNote = () => ({
    type: CREATE_NOTE,
    noteId: Date.now().toString() + Math.random().toString(),
    createDate: Date.now(),
});
