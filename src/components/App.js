import React from 'react';
import "../styles/main.less";
import EditableNote from './EditableNote';
import Note from './Note';
import Button from '../ui/Button';
import Header from '../ui/Header';
import { FlexBox, flexPositions, flexDirection } from '../ui/Flexbox';
import Sorting from './Sorting';
import { connect } from 'react-redux';
import { createNote } from '../store/actions';

class App extends React.Component {
    render() {
        return (
            <>
                <Header>Заметки</Header>
                <FlexBox position={flexPositions.end}>
                    <Sorting/>
                </FlexBox>
                <FlexBox position={flexPositions.start}>
                    <Button
                        onClick={this.props.createNote}
                        disabled={
                            this.props.notes.some((note) => note.isEditable === true)
                        }
                    >Добавить</Button>
                </FlexBox>
                <FlexBox direction={flexDirection.row}>
                {
                    this.props.notes
                        .sort((firstCompareValue, secondCompareValue) => {
                            if(firstCompareValue[this.props.sortField] > secondCompareValue[this.props.sortField]){
                                return this.props.sortDirection === 'ASC' ? 1 : -1
                            } 
                            if(firstCompareValue[this.props.sortField] < secondCompareValue[this.props.sortField]) {
                                return this.props.sortDirection === 'DESC' ? 1 : -1
                            }
                            return 0
                        })
                        .map((note) => {
                            if (note.isEditable) {
                               return (
                                    <EditableNote
                                        key={note.noteId}
                                        note={note}
                                    />
                               );
                            } else {
                                return (
                                    <Note
                                        key={note.noteId}
                                        note={note}
                                    />
                                );
                            }
                        })
                }
                </FlexBox>
            </>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    sortDirection: state.sortDirection,
    sortField: state.sortField
});

const mapDispatchToProps = dispatch => ({
    createNote: () => dispatch(createNote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);