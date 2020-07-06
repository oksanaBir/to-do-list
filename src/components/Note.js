import React from 'react';
import NoteWrapper from '../ui/NoteWrapper';
import ColorPicker from '../ui/ColorPicker';
import Title from '../ui/Title';
import NoteDescription from '../ui/NoteDescription';
import Button from '../ui/Button';
import Date from '../ui/Date';
import { connect } from 'react-redux';
import { deleteNote, changeNoteColor, changeNoteEditable, changeNoteTitle, changeNoteDescription, changeNoteDate } from '../store/actions';

class Note extends React.Component {
    onColorChange(noteId, activeColor) {
        this.props.changeNoteColor(noteId, activeColor);
    }

    onEditableChange(noteId, isEditable) {
        this.props.changeNoteEditable(isEditable, noteId);
    }

    onTitleChange(value, noteId) {
        this.props.changeNoteTitle(noteId, value);
    }

    onDescriptionChange(value, noteId) {
        this.props.changeNoteDescription(noteId, value);
    }

    onDateChange(value, noteId) {
        this.props.changeNoteDate(noteId, value);
    }

    deleteNote(noteId) {
        this.props.deleteNote(noteId);
    }

    render() {
        const { noteId, isEditable, title, description, completionDate, titleValidation, completionDateValidation, color } = this.props.note;
        const activeColor = this.props.colors[this.props.note.color];

        return(
            <NoteWrapper backgroundColor={activeColor}>
                <Title
                    backgroundColor={activeColor}
                    contentEditable={isEditable}
                    value={title}
                    validation={titleValidation}
                    onChange={(value) => this.onTitleChange(value, noteId)}
                    
                ></Title>
                <Date
                    contentEditable={isEditable}
                    value={completionDate}
                    onChange={(value) => this.onDateChange(value, noteId)}
                    validation={completionDateValidation}
                />
                <NoteDescription
                    contentEditable={isEditable}
                    backgroundColor={activeColor}
                    value={description}
                    onChange={(value) => this.onDescriptionChange(value, noteId)}
                />
                {
                    isEditable &&
                        <ColorPicker
                            changeColor={(activeColor) => this.onColorChange(noteId, activeColor)}
                            colors={this.props.colors}
                            selectedColor={color}
                        />
                }
                <Button
                    onClick={() => this.onEditableChange(noteId, isEditable)}
                    disabled={
                        titleValidation === false ||
                        completionDateValidation === false
                    }
                > 
                    { isEditable ? 'Сохранить' : 'Изменить' }
                </Button>
                <Button onClick={() => this.deleteNote(noteId)} isDanger={true}>Удалить</Button>
            </NoteWrapper>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    colors: state.colors,
});

const mapDispatchToProps = dispatch => ({
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    changeNoteColor: (noteId, activeColor) => dispatch(changeNoteColor(noteId, activeColor)),
    changeNoteDate: (noteId, value) => dispatch(changeNoteDate(noteId, value)),
    changeNoteTitle: (noteId, value) => dispatch(changeNoteTitle(noteId, value)),
    changeNoteDescription: (noteId, value) => dispatch(changeNoteDescription(noteId, value)),
    changeNoteEditable: (noteId, isEditable) => dispatch(changeNoteEditable(noteId, isEditable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
