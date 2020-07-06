import React from 'react';
import Select from '../ui/Select';
import { connect } from 'react-redux';
import { changeSortField, changeSortDirection } from '../store/actions';

const sortParams = [
    { label: 'по дате создания', value: 'createDate'},
    { label: 'по дате выполнения', value: 'completionDate', },
    { label: 'по цвету', value: 'color', },
    { label: 'по названию', value: 'title', },
];

const directionSortParams = [
    { label: 'с начала', value: 'ASC', },
    { label: 'с конца', value: 'DESC', },
];

class Sorting extends React.Component {
    setSortField(value) {
        this.props.changeSortField(value);
    }

    setSortDirection(value) {
        this.props.changeSortDirection(value);
    }

    render(){
        return(
            <>
                <Select
                    sortParams={sortParams}
                    value={this.props.sortField}
                    onChange={(value) => this.setSortField(value)}
                    label={this.props.label}
                />
                <Select
                    sortParams={directionSortParams}
                    value={this.props.sortDirection}
                    onChange={(value) => this.setSortDirection(value)}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({
    sortDirection: state.sortDirection,
    sortField: state.sortField
});

const mapDispatchToProps = dispatch => ({
    changeSortDirection: (value) => dispatch(changeSortDirection(value)),
    changeSortField: (value) => dispatch(changeSortField(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);