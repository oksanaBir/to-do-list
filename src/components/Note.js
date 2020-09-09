import React from 'react';
import NoteWrapper from '../ui/NoteWrapper';
import Title from '../ui/Title';
import NoteDescription from '../ui/NoteDescription';
import Button from '../ui/Button';
import DatePicker from '../ui/Date';
import { connect } from 'react-redux';
import {
    deleteNote,
    changeNoteEditable
} from '../store/actions';
import { FlexBox, flexPositions, flexDirection } from '../ui/Flexbox';

class Note extends React.Component {
    render() {
        const { 
            noteId,
            isEditable,
            title,
            description,
            completionDate,
            color
        } = this.props.note;
        const activeColor = this.props.colorPicker[color];

        return(
            <NoteWrapper backgroundColor={activeColor}>
                <Title
                    backgroundColor={activeColor}
                    value={title}
                />
                <DatePicker
                    value={completionDate}
                />
                <NoteDescription
                    backgroundColor={activeColor}
                    value={description}
                />
                <FlexBox margin={0} position={flexPositions.center}>
                    <Button
                        onClick={
                            () => this.props.changeNoteEditable(noteId, isEditable)
                        }
                    >Изменить</Button>
                    <Button
                        onClick={() => this.props.deleteNote(noteId)}
                        danger
                    >Удалить</Button>
                </FlexBox>
            </NoteWrapper>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    colorPicker: state.colors,
});

const mapDispatchToProps = dispatch => ({
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    changeNoteEditable: (noteId, isEditable) => dispatch(changeNoteEditable(noteId, isEditable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);