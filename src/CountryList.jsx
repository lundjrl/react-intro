import React, { Component } from 'react';
import CountryCard from './CountryCard.js';
import './CountryList.css';

class CountryList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chosenRegion: this.props.region,
      countries: []
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({chosenRegion: nextProps.region})
    this.setState({countries: []})
    fetch(`https://restcountries.eu/rest/v2/region/${nextProps.region}`)
    .then(r => r.json())
    .then(data => {
    this.setState({countries: data})
}); 
}
  render() {
      return (
        <div>
          <h2>Below is the list of countries in {this.state.chosenRegion}</h2>
          <span id="countriesInRegion">{this.state.countries.map(x => <CountryCard countryCode = {x.alpha3Code}/>)}</span>
        </div>)
    }
  }
export default CountryList;
