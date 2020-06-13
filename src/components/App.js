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
            sortBy: 'createDate',
            sortingDirection: 'start',
            colors: ['#F0F0F0', '#F0D1E2', '#D0D8F5', '#F5E6BA', '#F5C0BA'],
            notes: {},
        }

        this.deleteNote = this.deleteNote.bind(this);
        this.createNote = this.createNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
        this.onSortDirectionChange = this.onSortDirectionChange.bind(this);
    }

    componentDidMount() {
        this.createNote();
    }

    createNote() {
        this.setState({
            notes: {
                ...this.state.notes,
                [Date.now().toString() + Math.random().toString()]: {
                    color: 0,
                    title: '',
                    createDate: Date.now(),
                    date: '',
                    isEditable: true,
                    description: '',
                    titleValidation: false,
                    dateValidation: false,
                }
            }
        });
    }

    deleteNote(noteId) {
        delete this.state.notes[noteId]
        this.setState({
            notes: {
                ...this.state.notes,
            }
        });
    }

    editNote(noteId, data) {
        this.setState({ 
            notes: {
                ...this.state.notes,
                [noteId]: {
                    ...this.state.notes[noteId],
                    ...data,
                },
            },
        });
    }

    onSortChange(event) {
        this.setState({
            sortBy: event.target.value,
            notes: {
                ...this.state.notes,
            }
        });
    }

    onSortDirectionChange(event) {
        this.setState({
            sortingDirection: event.target.value,
            notes: {
                ...this.state.notes,
            }
        });
    }

    render() {
        const notesIds = Object.keys(this.state.notes);

        return (
            <>
                <Header>Заметки</Header>
                <FlexBox position={flexPositions.end}>
                    <Sorting 
                        onSortChange={this.onSortChange}
                        value={this.state.sortBy}
                        additionalValue={this.state.sortingDirection}
                        onSortDirectionChange={this.onSortDirectionChange}
                    />
                </FlexBox>
                <FlexBox direction={flexDirection.row}>
                    <Button handleClick={this.createNote}>Добавить</Button>
                    {
                        notesIds
                        .sort((firstCompareValue, secondCompareValue) => {
                            if(this.state.notes[firstCompareValue][this.state.sortBy] > this.state.notes[secondCompareValue][this.state.sortBy]){
                                if(this.state.sortingDirection == 'start') {
                                    return 1
                                } else return -1
                            }
                            if(this.state.notes[firstCompareValue][this.state.sortBy] < this.state.notes[secondCompareValue][this.state.sortBy]) {
                                if(this.state.sortingDirection == 'end') {
                                    return 1
                                } else return -1
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
                            )
                        })
                    }
                </FlexBox>
            </>
        );
    }
}
