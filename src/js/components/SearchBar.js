import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { searchCity } from '../actions/index';
import placeSearch from './placeSearchWrapper';
import { withRouter, Redirect } from 'react-router-dom'

class SearchBar extends Component {

    constructor() {
        super();
        this.state ={
            fireRedirect: false
        }
    }

    onSubmit(props, dispatch) {
        return dispatch(searchCity(props)).then(() => {
            this.setState({fireRedirect: true})
        });
    }

    render() {
        const { handleSubmit } = this.props;
        if(this.state.fireRedirect) {
            return(
                <Redirect to="/result" />
            )
        }
        return(
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } className="container">
                <div className="row justify-content-center">
                    <div className="form-group col-7">
                        <Field
                            name="placeSearch"
                            component={placeSearch}
                            label="Address"
                            className="form-conrol input-group-lg reg_name"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary col">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default withRouter(reduxForm({
    form: 'search'
})(SearchBar));
