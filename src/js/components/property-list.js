import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import MapWithAMarkerClusterer from './google-map-marker-cluster';

class PropertyList extends PureComponent {

    render() {
        console.log(this.props.properties);
        return (
            <div className="row">
                <div className="col-8">
                    <MapWithAMarkerClusterer markers={this.props.properties} />
                </div>
            </div>
        )
    }
}

function mapStateToProps({ properties }) {
    return { properties };
}

export default connect(mapStateToProps)(PropertyList);