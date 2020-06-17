import React from 'react';
import Note from './Note';
import Button from '../ui/Button';
import Header from '../ui/Header';
import {FlexBox, flexPositions, flexDirection} from '../ui/Flexbox';
import Sorting from './Sorting';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortField: 'createDate',
            sortDirection: 'ASC',
            colors: ['#F0F0F0', '#F0D1E2', '#D0D8F5', '#F5E6BA', '#F5C0BA'],
            notes: {},
        }

        this.deleteNote = this.deleteNote.bind(this);
        this.createNote = this.createNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.changeSort = this.changeSort.bind(this);
    }

    createNote() {
        this.setState({
            notes: {
                ...this.state.notes,
                [Date.now().toString() + Math.random().toString()]: {
                    color: 0,
                    title: '',
                    createDate: Date.now(),
                    completionDate: '',
                    isEditable: true,
                    description: '',
                    titleValidation: false,
                    dateValidation: false,
                }
            }
        });
    }

    deleteNote(noteId) {
        const { [noteId]: _, ...newNotes } = this.state.notes; 
        
        this.setState({
            notes: {
                ...newNotes,
            }
        });
    }

    editNote(noteId, newData) {
        this.setState({
            notes: {
                ...this.state.notes,
                [noteId]: {
                    ...this.state.notes[noteId],
                    ...newData,
                },
            },
        });
    }

    changeSort(newData) {
        this.setState({
            ...newData
        });
    }

    render() {
        const notesIds = Object.keys(this.state.notes);

        return (
            <>
                <Header>Заметки</Header>
                <FlexBox position={flexPositions.end}>
                    <Sorting 
                        changeSort={this.changeSort}
                    />
                </FlexBox>
                <FlexBox direction={flexDirection.row}>
                    <Button onClick={this.createNote}>Добавить</Button>
                    {
                        notesIds
                            .sort((firstCompareValue, secondCompareValue) => {
                                if(this.state.notes[firstCompareValue][this.state.sortField] > this.state.notes[secondCompareValue][this.state.sortField]){
                                    return this.state.sortDirection === 'ASC' ? 1 : -1
                                }
                                if(this.state.notes[firstCompareValue][this.state.sortField] < this.state.notes[secondCompareValue][this.state.sortField]) {
                                    return this.state.sortDirection === 'DESC' ? 1 : -1
                                }
                                return 0
                            })
                            .map(id => {
                                return (
                                    <Note
                                        key={id}
                                        noteId={id}
                                        note={this.state.notes[id]}
                                        colors={this.state.colors}
                                        deleteNote={this.deleteNote}
                                        editNote={this.editNote}
                                    />
                                );
                            })
                    }
                </FlexBox>
            </>
        );
    }
}
