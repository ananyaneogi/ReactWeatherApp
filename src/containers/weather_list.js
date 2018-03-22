import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((wt) => wt.main.temp );
    const humid = cityData.list.map((wh) => wh.main.humidity );
    const pressure = cityData.list.map((wp) => wp.main.pressure );
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        {/* <td>{name}</td> */}
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="green" unit="K"/></td>
        <td><Chart data={pressure} color="blue" unit="hPa"/></td>
        <td><Chart data={humid} color="black" unit="%"/></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList)
