import React from 'react';
import Select from '../ui/Select';

export const sortParams = [
    { label: 'по дате создания', value: 'createDate'},
    { label: 'по дате выполнения', value: 'completionDate', },
    { label: 'по цвету', value: 'color', },
    { label: 'по названию', value: 'title', },
];

export const directionSortParams = [
    { label: 'с начала', value: 'ASC', },
    { label: 'с конца', value: 'DESC', },
];

export default class Sorting extends React.Component {
    setSortField(event){
        this.props.changeSort(
            { sortField: event.target.value }
        );
    }

    setSortDirection(event){
        this.props.changeSort(
            { sortDirection: event.target.value }
        );
    }

    render(){
        return(
            <>
                <Select
                    sortParams={sortParams}
                    value={this.props.sortField}
                    onChange={(event) => this.setSortField(event)}
                    label={this.props.label}
                />
                <Select
                    sortParams={directionSortParams}
                    value={this.props.sortDirection}
                    onChange={(event) => this.setSortDirection(event)}
                />
            </>
        );
    }
}