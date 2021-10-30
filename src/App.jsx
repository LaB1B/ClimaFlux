import './App.css';
import React, { Component } from 'react';
import Home from "./Components/Home"
import {BrowserRouter as Router , Route} from "react-router-dom"
import axios from "axios"
import "./css/responsive.css"

class App extends Component {
  state = { weatherData: { location: { name: "----", }, current: { observation_time: "07:16 AM", temperature: "---", weather_icons: [ "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0003_white_cloud.png", ], weather_descriptions: "", }, }, };

  componentDidMount() {
    let location = axios.get("https://ipgeolocation.abstractapi.com/v1/?api_key=ad7b9b306bcc48d29fb4bafefdec95ed").then((data) => {
      axios
      .get(
        `http://api.weatherstack.com/current?access_key=49ec04613756acf55ec29ffdcd8556a0&query=${data.data.city}`
      )
      .then((data) => this.setState({weatherData : data.data}));
  
    })
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <Route
            path=""
            exact
            component={(props) => (
              <Home weather={this.state.weatherData} {...props} />
            )}
          />
        </Router>
      </React.Fragment>
    );
  }
}

function Nav() {
  return (
    <div className="nav">
      <div className="logo">ClimaFlux</div>
    </div>
  );
}


export default App;

