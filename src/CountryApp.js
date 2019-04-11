import React, { Component } from 'react';
import CountryList from './CountryList.jsx';
import CountryCard from './CountryCard.js';
import './App.css';

class CountryApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRegion: 'Europe',
            regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
        }
      }
        handleChange(e){
          this.setState({selectedRegion: e.target.value});
        }
      
  render() {
    return (
      <div className="CountryApp">
        <label for="continentList"> Below is a list of continents, please choose one</label>
        <select id="continentList" onChange={this.handleChange.bind(this)}>
        {this.state.regions.map(x => <option key={x}>{x}</option>)}</select>
        <div>
        <CountryList region={this.state.selectedRegion} /> 
        </div>
      </div>
    );
  }
}
export default CountryApp;
