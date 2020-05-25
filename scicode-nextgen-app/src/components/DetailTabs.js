import React, { Component } from 'react';

class DetailTabs extends Component {
    render() {
        return (
            <div className="wrapperOverview">
                <div className="floatingOverview">
                    <h3>Signups</h3>
                </div>
                <div className="floatingOverview">
                    <h4>Investments</h4>
                </div>
                <div className="floatingOverview">
                    <h4>Revenue</h4>
                </div>
                <div className="floatingOverview">
                    <h4>Exits</h4>
                </div>
                <div className="floatingOverview">
                    <h4>Trades</h4>
                </div>
            </div>

        );
    }
}

export default DetailTabs;