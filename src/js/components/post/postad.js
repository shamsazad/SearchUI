import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import placeSearch from '../placeSearchWrapper';
import { postAds } from '../../actions/index';
import { withRouter, Redirect } from 'react-router-dom';

class PostAd extends Component {

    constructor() {
        super();
        this.state ={
            fireRedirect: false
        }
    }

    onSubmit(props, dispatch) {
        return dispatch(postAds(props)).then(() => {
            this.setState({fireRedirect: true})
        });
    }

    render() {
        const { handleSubmit } = this.props;
        if(this.state.fireRedirect) {
            return(
                <Redirect to="/" />
            )
        }

        return(
            <div className="jumbotron">
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } className="container">
                <div className="form-group row">
                    <label className="col-form-label">Address </label>
                    <div className="col-sm-8" style={{ zIndex: 1090 }} >
                        <Field
                            name="address"
                            component={placeSearch}
                            label="Address"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Period </label>
                    <div className="col-sm-8">
                        <Field
                            name="period"
                            component="input"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label">Price</label>
                    <div className="col-sm-8">
                        <Field
                            name="price"
                            component="input"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default withRouter(reduxForm({
    form: 'postad'
})(PostAd));