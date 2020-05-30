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

    onTitleChange(noteId, newTitle) {
        this.props.editNote(noteId, 'title', newTitle);
        
    }



    render() {
        const { noteId, colors, note, deleteNote } = this.props;
        const { isEditable } = note;
        const activeColor = colors[note.color];

        return(
            <NoteWrapper backgroundColor={activeColor}>
                <Title 
                    backgroundColor={activeColor}
                    contentEditable={isEditable}
                    
                ></Title>
                <NoteDescription
                    contentEditable={isEditable}
                    backgroundColor={activeColor}
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