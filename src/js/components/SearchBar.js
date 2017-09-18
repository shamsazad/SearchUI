import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { searchCity } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSelect(address) {
        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then(({lat, lng}) => {
                console.log(this.props);
                this.props.field.searchCity.lat = lat;
                this.props.field.searchCity.lng = lng;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChange(address) {
        this.props.field.searchCity.address = address;
        console.log(address);
    }

    render() {
        const AutocompleteItem = ({ formattedSuggestion }) => (
            <div className="Demo__suggestion-item">
                <i className='fa fa-map-marker Demo__suggestion-icon'/>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small className="text-muted">{formattedSuggestion.secondaryText}</small>
            </div>);

        const inputProps = {
            type: "text",
            value: this.address,
            onChange: this.handleChange,
            autoFocus: true,
            placeholder: "Search Places",
            name: 'Demo__input',
            id: "my-input-id",
        }

        const { handleSubmit } = this.props;
        console.log(this.props);

        return(
            <form onSubmit={ handleSubmit }>
                <Field
                    name="searchCity"
                    component={PlacesAutocomplete}
                    type="search"
                    onSelect={this.handleSelect}
                    autocompleteItem={AutocompleteItem}
                    onEnterKeyDown={this.handleSelect}
                    inputProps={inputProps}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'search'
}, null, { searchCity })(SearchBar);
