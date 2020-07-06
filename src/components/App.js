import React from 'react';
import Note from './Note';
import Button from '../ui/Button';
import Header from '../ui/Header';
import {FlexBox, flexPositions, flexDirection} from '../ui/Flexbox';
import Sorting from './Sorting';
import { connect } from 'react-redux';
import { createNote } from '../store/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.createNote = this.createNote.bind(this);
    }

    createNote() {
        this.props.createNote();
    }

    render() {
        return (
            <>
                <Header>Заметки</Header>
                <FlexBox position={flexPositions.end}>
                    <Sorting/>
                </FlexBox>
                <FlexBox direction={flexDirection.row}>
                    <Button onClick={this.createNote}>Добавить</Button>
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
                            .map(note => {
                                return (
                                    <Note
                                        key={note.noteId}
                                        note={note}
                                        colors={this.props.colors}
                                    />
                                );
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