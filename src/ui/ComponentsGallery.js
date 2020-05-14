import React from 'react';
import Header from './Header';
import NoteWrapper from './NoteWrapper';
import Button from './Button';
import { FlexBox, flexPositions, flexDirection} from './Flexbox';
import Sorting from './Sorting';
import ColorPicker from './ColorPicker';
import Title from './Title';
import NoteDescription from './NoteDescription';

export default function ComponentsGallery() {
    return (
        <>
            <Header>Заметки</Header>
            <FlexBox direction={flexDirection.column} margin={10}>
                <Sorting />
                <Button>Добавить</Button>
                <Button isDanger={true}>Удалить</Button>
                <NoteWrapper />
                <NoteDescription handleChange={() => console.log('')}/>
                <Title contentEditable={true}></Title>
                <ColorPicker colors={['#F0F0F0', '#F288AF', '#134BF2', '#F2A516', '#F2490C']} changeColor={(key) => console.log(key)} />         
            </FlexBox>
        </>
    );
}
