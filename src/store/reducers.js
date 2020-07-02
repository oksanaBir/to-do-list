// import {changeNoteColor, changeNoteEditable, changeNoteTitle, changeNoteDescription, changeNoteDate, changeSortDirection, changeSortField, createNote } from './actions'
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
                color: action.color,
                noteId: action.noteId
            }
        case CHANGE_NOTE_EDITABLE:
            return {
                ...state,
                isEditable: action.isEditable,
                noteId: action.noteId
            }
        case CHANGE_NOTE_TITLE:
            return {
                ...state,
                title: action.title,
                titleValidation: action.titleValidation,
                noteId: action.noteId
            }
        case CHANGE_NOTE_DESCRIPTION:
            return {
                ...state,
                description: action.description,
                noteId: action.noteId
            }
        case CHANGE_NOTE_DATE:
            return {
                ...state,
                completionDate: action.completionDate,
                dateValidation: action.dateValidation,
                noteId: action.noteId
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
                notes: {
                    noteId: action.noteId,
                    color: action.color,
                    title: action.title,
                    createDate: action.createDate,
                    completionDate: action.completionDate,
                    isEditable: action.isEditable,
                    description: action.description,
                    titleValidation: action.titleValidation,
                    dateValidation: action.dateValidation
                }
            }
        case DELETE_NOTE:
            return {
                ...state,
                noteId
            }
        default:
            return state
    }
}