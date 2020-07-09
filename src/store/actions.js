import {
    CHANGE_NOTE_COLOR,
    CHANGE_NOTE_EDITABLE,
    CHANGE_NOTE_TITLE,
    CHANGE_NOTE_DESCRIPTION,
    CHANGE_NOTE_DATE,
    CHANGE_SORT_DIRECTION,
    CHANGE_SORT_FIELD,
    CREATE_NOTE,
    DELETE_NOTE
} from './actionTypes';

export const changeNoteColor = (noteId, activeColor) => ({  
    noteId,
    type: CHANGE_NOTE_COLOR,
    color: activeColor,
});

export const changeNoteEditable = (noteId, isEditable) => ({
    noteId,
    type: CHANGE_NOTE_EDITABLE,
    isEditable: isEditable,
});

export const changeNoteTitle = (noteId, value) => ({
    noteId,
    type: CHANGE_NOTE_TITLE,
    title: value,
    titleValidation: !(value.length === 0 || !value.trim()),
});

export const changeNoteDescription = (noteId, value) => ({
    noteId,
    type: CHANGE_NOTE_DESCRIPTION,
    description: value,
});

export const changeNoteDate = (noteId, value) => ({
    noteId,
    type: CHANGE_NOTE_DATE,
    completionDate: value,
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
    noteId,
    type: DELETE_NOTE,
});

export const createNote = () => ({
    noteId: Date.now().toString() + Math.random().toString(),
    type: CREATE_NOTE,
    completionDate: Date.now(),
    createDate: Date.now(),
});