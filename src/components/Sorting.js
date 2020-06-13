import React from 'react';
import Select from '../ui/Select';

export const sortParams = [
    { label: 'по дате создания', value: 'createDate'},
    { label: 'по дате выполнения', value: 'date', },
    { label: 'по цвету', value: 'color', },
    { label: 'по названию', value: 'title', },
];

export const addSortParams = [
    { label: 'с начала', value: 'start', },
    { label: 'с конца', value: 'end', },
];

export const dateSortParams = [
    { label: 'сначала новые', value: 'start', },
    { label: 'сначала старые', value: 'end', },
];


export default class Sorting extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Select
                    sortParams={sortParams}
                    value={this.props.value}
                    onChange={(event) => this.props.onSortChange(event)}
                    label={this.props.label}
                />
                <Select
                    sortParams={
                        this.props.value == 'date' || this.props.value == 'createDate' ? dateSortParams : addSortParams
                    }
                    value={this.props.additionalValue}
                    onChange={(event) => this.props.onSortDirectionChange(event)}
                />
            </>
        );
    }
}