import React, { Component } from 'react';
import './CountryCard.css';

class CountryCard extends Component{
constructor(props) {
    super(props);
    this.state = {
      countryData: null,
    }
  }
  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/alpha/${this.props.countryCode}`)
     .then(r => r.json())
     .then(data => {
       this.setState({countryData: data})
     });
  }
  render() {
            if(this.state.countryData !== null){
                return (
                      <div className="countryDetails">
                        <ul className="countryAttribute">
                          <li><span><img id="image" src={this.state.countryData.flag} className="heading"></img></span>
                            <span className="heading">{this.state.countryData.name}</span></li>
                            <li>Population: {new Intl.NumberFormat().format(this.state.countryData.population)}></li> 
                            <li>Area: {new Intl.NumberFormat().format(this.state.countryData.area)}></li> 
                            <li>Languages: <ol>{this.state.countryData.languages.map(x => <li key={x.name}>{x.name}</li>)}></ol></li>
                            </ul>
                        </div>);
            } else {
                return( 
                  <div id="countryDetails">
                    <p>No country data</p>
                </div>);
            }    
      }
  }
  export default CountryCard;