import { CHANGE_NOTE_DATE, CHANGE_SORT_DIRECTION, CHANGE_SORT_FIELD, CHANGE_NOTE_EDITABLE, CHANGE_NOTE_TITLE, CREATE_NOTE, CHANGE_NOTE_COLOR, DELETE_NOTE, CHANGE_NOTE_DESCRIPTION } from './actionTypes'

const initialState = {
    sortField: 'createDate',
    sortDirection: 'ASC',
    colors: ['#F0F0F0', '#F0D1E2', '#D0D8F5', '#F5E6BA', '#F5C0BA'],
    notes: [],
}

export default function app(state = initialState, action){
    switch (action.type) {
        case CHANGE_NOTE_COLOR:
            return {
                ...state,
                notes: [
                    ...state.notes.map((note) => {
                        if (note.noteId === action.noteId) {
                            note.color = action.color;
                        } return note
                    })
                ]
            }
        case CHANGE_NOTE_EDITABLE:
            return {
                ...state,
                notes: [
                    ...state.notes.map((note) => {
                        if (note.noteId === action.noteId) {
                            note.isEditable = !(action.isEditable);
                        } return note
                    })
                ]
            }
        case CHANGE_NOTE_TITLE:
            return {
                ...state,
                notes: [
                    ...state.notes.map((note) => {
                        if (note.noteId === action.noteId) {
                            note.title = action.title;
                            note.titleValidation = action.titleValidation;
                        } return note
                    })
                ]
            }
        case CHANGE_NOTE_DESCRIPTION:
            return {
                ...state,
                notes: [
                    ...state.notes.map((note) => {
                        if (note.noteId === action.noteId) {
                            note.description = action.description;
                        } return note
                    })
                ]
            }
        case CHANGE_NOTE_DATE:
            return {
                ...state,
                notes: [
                    ...state.notes.map((note) => {
                        if (note.noteId === action.noteId) {
                            note.completionDate = action.completionDate;
                            note.completionDateValidation = action.completionDateValidation;
                        } return note
                    })
                ]
            }
        case CHANGE_SORT_DIRECTION:
            return {
                ...state,
                sortDirection: action.sortDirection
            }
        case CHANGE_SORT_FIELD:
            return {
                ...state,
                sortField: action.sortField
            }
        case CREATE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        noteId: action.noteId,
                        color: 0,
                        title: 'New Note',
                        createDate: action.createDate,
                        completionDate: '',
                        isEditable: true,
                        description: '',
                        titleValidation: true,
                        completionDateValidation: false,
                    }
                ]
            }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: state.notes.filter(note => note.noteId !== action.noteId),
            }
        }
        default:
            return state
    }
}
