import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return (
            <div className="wrapperOverview">
                <div className="floatingOverview">
                    <h3>OVERVIEW</h3>
                </div>
                <div className="floatingOverview">
                    <h4>Total signups</h4>
                </div>
                <div className="floatingOverview">
                    <h4>Last week</h4>
                </div>
                <div className="floatingOverview">
                    <h4>Total investments</h4>
                </div>
                <div className="floatingOverview">
                    <h4>Average investment</h4>
                </div>
                <div className="floatingOverview">
                    <h4>Total exits</h4>
                </div>
            </div>

        );
    }
}

export default Overview;