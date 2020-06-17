import React from 'react';
import NoteWrapper from '../ui/NoteWrapper';
import ColorPicker from '../ui/ColorPicker';
import Title from '../ui/Title';
import NoteDescription from '../ui/NoteDescription';
import Button from '../ui/Button';
import Date from '../ui/Date';

export default class Note extends React.Component {
    onColorChange(noteId, newColor) {
        this.props.editNote(
            noteId,
            {
                color: newColor,
            }
        );
    }

    onEditableChange(noteId, isEditable, titleValidation, dateValidation) {
        titleValidation & dateValidation === true &&
        this.props.editNote(
            noteId,
            {
                isEditable: !isEditable
            }
        );
    }

    onTitleChange(value, noteId) {
        this.props.editNote(
            noteId,
            {
                title: value,
                titleValidation: !(value.length === 0 || !value.trim()),
            }
        );
    }

    onDescriptionChange(value, noteId) {
        this.props.editNote(
            noteId,
            {
                description: value,
            }
        );
    }

    onDateChange(value, noteId) {
        this.props.editNote(
            noteId,
            {
                completionDate: value,
                dateValidation: value !== undefined,
            }
        );
    }

    render() {
        const { noteId, colors, note, deleteNote } = this.props;
        const { isEditable, title, description, completionDate, titleValidation, dateValidation, color } = note;
        const activeColor = colors[note.color];

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
                    validation={dateValidation}
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
                            changeColor={(newColor) => this.onColorChange(noteId, newColor)}
                            colors={colors}
                            selectedColor={color}
                        />
                }
                <Button
                    onClick={() => this.onEditableChange(noteId, isEditable, titleValidation, dateValidation)}
                    isBlock = { !(titleValidation & dateValidation) } 
                > 
                    { isEditable ? 'Сохранить' : 'Изменить' }
                </Button>
                <Button onClick={() => deleteNote(noteId)} isDanger={true}>Удалить</Button>
            </NoteWrapper>
        );
    }
}