import React from 'react';
import NoteWrapper from '../ui/NoteWrapper';
import ColorPicker from '../ui/ColorPicker';
import Title from '../ui/Title';
import NoteDescription from '../ui/NoteDescription';
import Button from '../ui/Button';

export default class Note extends React.Component {
    constructor(props){
        super(props);
    }

    onColorChange(noteId, newColor) {
        this.props.editNote(noteId, 'color', newColor);
    }

    onEditableChange(noteId, isEditable) {
        this.props.editNote(noteId, 'isEditable', !isEditable)
    }

    onTitleChange(event, noteId) {
        this.props.editNote(noteId, 'title', event.target.value);
    }

    onDescriptionChange(event, noteId) {
        this.props.editNote(noteId, 'description', event.target.value)
    }

    render() {
        const { noteId, colors, note, deleteNote } = this.props;
        const { isEditable, title, description } = note;
        const activeColor = colors[note.color];

        return(
            <NoteWrapper backgroundColor={activeColor}>
                <Title 
                    backgroundColor={activeColor}
                    contentEditable={isEditable}
                    value={title}
                    handleChange={(event) => this.onTitleChange(event, noteId)}             
                ></Title>
                <NoteDescription
                    contentEditable={isEditable}
                    backgroundColor={activeColor}
                    value={description}
                    handleChange={(event) => this.onDescriptionChange(event, noteId)}
                />
                {
                    isEditable &&
                        <ColorPicker
                            changeColor={(newColor) => this.onColorChange(noteId, newColor)}
                            colors={colors}
                            selectedColor={note.color}
                        />
                }
                <Button handleClick={() => this.onEditableChange(noteId, isEditable)}>
                    { isEditable ? 'Сохранить' : 'Изменить' }
                </Button>
                <Button handleClick={() => deleteNote(noteId)} isDanger={true}>Удалить</Button>
            </NoteWrapper>
        );
    }
}