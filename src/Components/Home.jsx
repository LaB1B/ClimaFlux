import React, { Component } from 'react'
import "../css/Home.css"
import Moment from "moment"
import identify from './../identifier/identifier';

class Home extends Component {
   state = {
      weather : this.props.weather
   }

   HandleMessage() {
      //handle the message at .message
      const name = identify.filter(F => F.weather_desc == this.state.weather.current.weather_descriptions)
      return (name.length === 0 ? `I got nothing to say, but the weather will be kinda ${this.state.weather.current.weather_descriptions}` : name[0].message)
      
   }

   render() {
         const {weather} = this.state
      return (
        <React.Fragment>
          <img
            src={require("../pics/Background.jpg").default}
            alt=""
            className="background"
          />
          <div className="Section">
            <div className="weather-card">
              <div className="top-section">
                <div className="Date-and-Time">
                  <p className="Date">{Moment().format("Do MMMM YYYY")}</p>
                  <div className="Date-underscore"></div>
                  <p className="temperature">
                    {weather.current.temperature} °
                  </p>
                  <div className="desc">
                    <p>{weather.current.weather_descriptions}</p>
                  </div>
                </div>
                <div className="iCon">
                  <img src={weather.current.weather_icons} alt="" />
                </div>
              </div>
              <div className="bottom-section">
                <p className="earth">
                  {weather.location.name}, Earth
                </p>
                <h4>We are living in the middle of nowhere .</h4>
                <p className="message">
                  {this.HandleMessage()}
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
   }
}

export default Home


//TODO add observation time
//TODO add more responsiveness
//Todo BOOST PERFORMACE    
//TODO make the image more flexible