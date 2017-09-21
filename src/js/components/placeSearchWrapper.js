import React, { Component } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export default class placeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            geocodeResults: null,
            loading: false
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSelect(address) {
        this.setState({
            address,
            loading: true
        })

        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then(({lat, lng}) => {
                console.log('Success Yay', {lat, lng});
                this.setState({
                    geocodeResults: {lat, lng},
                    loading: false
                })
            })
            .catch((error) => {
                console.log('Oh no!', error);
                this.setState({
                    geocodeResults: null,
                    loading: false
                })
            })
    }

    handleChange(address) {
        this.setState({
            address,
            geocodeResults: null
        })
    }

    render() {
        const AutocompleteItem = ({ formattedSuggestion }) => (
            <div className="Demo__suggestion-item">
                <i className='fa fa-map-marker Demo__suggestion-icon'/>
                <strong>{formattedSuggestion.mainText}</strong>{' '}
                <small className="text-muted">{formattedSuggestion.secondaryText}</small>
            </div>)

        const inputProps = {
            type: "text",
            value: this.state.address,
            onChange: this.handleChange,
            onBlur: () => { console.log('Blur event!'); },
            onFocus: () => { console.log('Focused!'); },
            autoFocus: true,
            placeholder: "Search Places",
            name: 'Demo__input',
            id: "my-input-id",
        }

        return(
            <PlacesAutocomplete
                onSelect={this.handleSelect}
                autocompleteItem={AutocompleteItem}
                onEnterKeyDown={this.handleSelect}
                inputProps={inputProps}
            />
        )
    }
}
