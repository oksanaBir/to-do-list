import React from 'react';
import NoteWrapper from '../ui/NoteWrapper';
import ColorPicker from '../ui/ColorPicker';
import Title from '../ui/Title';
import NoteDescription from '../ui/NoteDescription';
import Button from '../ui/Button';
import DatePicker from '../ui/Date';
import { connect } from 'react-redux';
import {
    deleteNote,
    changeNoteColor,
    changeNoteEditable,
    changeNoteTitle,
    changeNoteDescription,
    changeNoteDate
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
            titleValidation,
            color
        } = this.props.note;
        const activeColor = this.props.colorPicker[this.props.note.color];

        return(
            <NoteWrapper
                backgroundColor={activeColor}
                contentEditable={isEditable}
            >
                <Title
                    backgroundColor={activeColor}
                    contentEditable={isEditable}
                    value={title}
                    validation={titleValidation}
                    onChange={(value) => this.props.changeNoteTitle(noteId, value)}   
                />
                <DatePicker
                    contentEditable={isEditable}
                    value={completionDate}
                    onChange={(value) => this.props.changeNoteDate(noteId, value)}
                />
                <NoteDescription
                    contentEditable={isEditable}
                    backgroundColor={activeColor}
                    value={description}
                    onChange={(value) => this.props.changeNoteDescription(noteId, value)}
                />
                <FlexBox margin={5} position={flexPositions.center}>
                    <ColorPicker
                        changeColor={(activeColor) => this.props.changeNoteColor(noteId, activeColor)}
                        colors={this.props.colorPicker}
                        selectedColor={color}
                    />
                </FlexBox>
                <FlexBox margin={0} position={flexPositions.center}>
                    <Button
                        onClick={
                            () => this.props.changeNoteEditable(noteId, isEditable)
                        }
                        disabled={
                            titleValidation === false
                        }
                    >Сохранить</Button>
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
    changeNoteColor: (noteId, activeColor) => dispatch(changeNoteColor(noteId, activeColor)),
    changeNoteDate: (noteId, value) => dispatch(changeNoteDate(noteId, value)),
    changeNoteTitle: (noteId, value) => dispatch(changeNoteTitle(noteId, value)),
    changeNoteDescription: (noteId, value) => dispatch(changeNoteDescription(noteId, value)),
    changeNoteEditable: (noteId, isEditable) => dispatch(changeNoteEditable(noteId, isEditable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);
