import React, { Component } from 'react';
import '../../assets/colors/colors.css'
import './App.css';
import ReactDOM from "react-dom";
import NavigationBar from "./components/NavigationBar.js";
import Overview from "./components/Overview";
import DetailTabs from "./components/DetailTabs";
import Charts from "./components/Charts";

class App extends Component {
  render() {
      return (
          <div>
              <div id="div1">
                <div><NavigationBar /></div>
              </div>
              <div id="div2">
                  <div><Overview /></div>
              </div>
              <div id="div3">
                  <DetailTabs />
              </div>
              <div id="div4">
                  <Charts />
              </div>
          </div>
      );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);