import React, { Component } from "react";
import PlacesAutocomplete from 'react-places-autocomplete';

export default class placeSearch extends Component {

    render() {

        const { input: { value, onChange } } = this.props;
        const AutocompleteItem = ({ formattedSuggestion }) => (
            <div >
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small>{formattedSuggestion.secondaryText}</small>
            </div>);

        const handleChange = (value) => {
            onChange(value);
        };

        const inputProps = {
            value: value,
            onChange: handleChange,
            placeholder: `What's your next Destination`,
            autoFocus: true,
        };

        return(
            <PlacesAutocomplete
                onSelect={handleChange}
                autocompleteItem={AutocompleteItem}
                onEnterKeyDown={handleChange}
                inputProps={inputProps}
            />
        )
    }
}
