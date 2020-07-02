import { CHANGE_NOTE_COLOR, CHANGE_NOTE_EDITABLE, CHANGE_NOTE_TITLE, CHANGE_NOTE_DESCRIPTION, CHANGE_NOTE_DATE, CHANGE_SORT_DIRECTION, CHANGE_SORT_FIELD, CREATE_NOTE } from '../actionTypes'
import { bindActionCreators } from 'redux';

export const changeNoteColor = (noteId, activeColor) => ({  
    type: CHANGE_NOTE_COLOR,
    color: activeColor,
    noteId
});

export const changeNoteEditable = (isEditable, noteId) => ({
    type: CHANGE_NOTE_EDITABLE,
    isEditable,
    noteId
});

export const changeNoteTitle = (noteId, title, titleValidation) => ({
    type: CHANGE_NOTE_TITLE,
    noteId,
    title,
    titleValidation
});

export const changeNoteDescription = (noteId, description) => ({
    type: CHANGE_NOTE_DESCRIPTION,
    description,
    noteId
});

export const changeNoteDate = (noteId, completionDate, dateValidation) => ({
    type: CHANGE_NOTE_DATE,
    completionDate,
    dateValidation,
    noteId
});

export const changeSortDirection = sortDirection => ({
    type: CHANGE_SORT_DIRECTION,
    sortDirection
});

export const changeSortField = sortField => ({
    type: CHANGE_SORT_FIELD,
    sortField
});

export const deleteNote = noteId => ({
    type: DELETE_NOTE,
    noteId
});

export const createNote = (noteId, color, title, createDate, completionDate, isEditable, description, titleValidation, dateValidation) => ({
    type: CREATE_NOTE,
    noteId: noteId,
    color: color,
    title: title,
    createDate: createDate,
    completionDate: completionDate,
    isEditable: isEditable,
    description: description,
    titleValidation: titleValidation,
    dateValidation: dateValidation,
});
