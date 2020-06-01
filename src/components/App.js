import React from 'react';
import Note from './Note';
import Button from '../ui/Button';
import Header from '../ui/Header';
import {FlexBox, flexPositions, flexDirection} from '../ui/Flexbox';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortingParams: [
                { label: 'по цвету', value: 'color', },
                { label: 'по дате создания', value: 'date', },
                { label: 'по названию', value: 'name' },
            ],
            colors: ['#F0F0F0', '#F0D1E2', '#D0D8F5', '#F5E6BA', '#F5C0BA'],
            notes: {},
        }

        this.deleteNote = this.deleteNote.bind(this);
        this.createNote = this.createNote.bind(this);
        this.editNote = this.editNote.bind(this);
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
                    isEditable: true,
                    description: '',
                    value: ''
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

    editNote(noteId, field, value) {
        this.setState({
            notes: {
                ...this.state.notes,
                [noteId]: {
                    ...this.state.notes[noteId],
                    [field]: value,
                },
            },
        });
    }

    render() {
        const notesIds = Object.keys(this.state.notes);

        return (
            <>
                <Header>Заметки</Header>
                <FlexBox direction={flexDirection.row}>
                    <Button handleClick={this.createNote}>Добавить</Button>
                    {
                        notesIds.map(id => {
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
                    {/* <Sorting sortingParams={this.state.sortingParams} /> */}
                </FlexBox>
            </>
        );
    }
}
