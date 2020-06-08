import React from 'react';
import NoteWrapper from '../ui/NoteWrapper';
import ColorPicker from '../ui/ColorPicker';
import Title from '../ui/Title';
import NoteDescription from '../ui/NoteDescription';
import Button from '../ui/Button';
import Date from '../ui/Date';

export default class Note extends React.Component {
    constructor(props){
        super(props);
    }

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

    onTitleChange(event, noteId) {
        this.props.editNote(
            noteId,
            {
                title: event.target.value,
                titleValidation: event.target.value !== undefined,
            }
        );
    }

    onDescriptionChange(event, noteId) {
        this.props.editNote(
            noteId,
            {
                description: event.target.value,
            }
        );
    }

    onDateChange(event, noteId) {
        this.props.editNote(
            noteId,
            {
                date: event.target.value,
                dateValidation: event.target.value !== undefined,
            }
        );
    }

    render() {
        const { noteId, colors, note, deleteNote } = this.props;
        const { isEditable, title, description, date, titleValidation, dateValidation } = note;
        const activeColor = colors[note.color];

        return(
            <NoteWrapper backgroundColor={activeColor}>
                <Title 
                    backgroundColor={activeColor}
                    contentEditable={isEditable}
                    value={title}
                    validation={titleValidation}
                    handleChange={(event) => this.onTitleChange(event, noteId)}
                    
                ></Title>
                <Date
                    contentEditable={isEditable}
                    value={date}
                    handleChange={(event) => this.onDateChange(event, noteId)}
                    validation={dateValidation}
                />
                <NoteDescription
                    contentEditable={isEditable}
                    backgroundColor={activeColor}
                    value={description}
                    handleChange={(event) => this.onDescriptionChange(event, noteId, validation)}
                />
                {
                    isEditable &&
                        <ColorPicker
                            changeColor={(newColor) => this.onColorChange(noteId, newColor)}
                            colors={colors}
                            selectedColor={note.color}
                        />
                }
                <Button handleClick={() => this.onEditableChange(noteId, isEditable, titleValidation, dateValidation)}>
                    { isEditable ? 'Сохранить' : 'Изменить' }
                </Button>
                <Button handleClick={() => deleteNote(noteId)} isDanger={true}>Удалить</Button>
            </NoteWrapper>
        );
    }
}