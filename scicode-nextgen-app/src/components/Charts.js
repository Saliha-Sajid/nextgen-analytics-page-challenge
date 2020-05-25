import React, { Component } from 'react';
import Individuals from "./Charts/Individuals.js";
import Companies from "./Charts/Companies";
import TotalSignups from "./Charts/TotalSignups";

class Charts extends Component {
    render() {
        return (
            <div>
                <div className="child1_div4"><Individuals /></div>
                <div className="child2_div4"><TotalSignups /></div>
                <div className="child1_div4"><Companies/></div>
                <div className="child3_div4"></div>
                <div className="child4_div4"></div>

            </div>
        );
    }
}

export default Charts;