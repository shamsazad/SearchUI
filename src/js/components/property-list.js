import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import MapWithAMarkerClusterer from './google-map-marker-cluster';

class PropertyList extends PureComponent {

    render() {
        console.log(this.props.properties);
        return (
            <MapWithAMarkerClusterer markers={this.props.properties} />
        )
    }
}

function mapStateToProps({ properties }) {
    return { properties };
}

export default connect(mapStateToProps)(PropertyList);