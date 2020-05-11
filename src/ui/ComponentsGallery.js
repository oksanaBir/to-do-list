import React from 'react';
import Header from './Header';
import NoteWrapper from './NoteWrapper';
import Button from './Button';
import { FlexBox, flexPositions} from './Flexbox';
import Sorting from './Sorting';
import ColorPicker from './ColorPicker';
import Title from './Title';

export default function ComponentsGallery() {
    return (
        <>
            <Header>Заметки</Header>
            <Sorting />
            <FlexBox>
                <FlexBox margin={20}>
                    <Button>Добавить</Button>
                </FlexBox>
                <FlexBox position={flexPositions.end}>
                    <NoteWrapper />
                    <Title contentEditable={true}>Заголовок</Title>
                    <ColorPicker />
                    <Button>Изменить</Button>
                    <Button>Удалить</Button>
                </FlexBox>
            </FlexBox>
        </>
    );
}
