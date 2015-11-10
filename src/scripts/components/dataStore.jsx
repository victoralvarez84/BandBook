import React from 'react';
import Parse from 'parse';
import Icon from './Icon';
import BandBook from '../bandBook';



class dataStore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let query = new Parse.Query(bandBook);
    query.get(this.props.data, {
      success: (object) => {
        this.setState({
          bandBook: object
        });
      }
    });
  }

  render() {
    return <div className ='dataStore'>
              <h2 className="text-center"><a href="#"><img src="assets/BB_logo_blue.jpg"/></a></h2>
              <h1>VENUES</h1>
              <h3>Project Name</h3>
              <h4>New World Brewery</h4>
              <h3>Contact Name</h3>
              <h4>Jeff Snyder</h4>
              <h3>Address</h3>
              <h4>1313 E 8th Ave</h4>
              <h3>City</h3>
              <h4>Tampa</h4>
              <h3>State</h3>
              <h4>FL</h4>
              <h3>Country</h3>
              <h4>United States</h4>
              <h3>Zip Code</h3>
              <h4>33605</h4>
              <h3>Phone</h3>
              <h4>813-555-5555</h4>
              <h3>E-mail</h3>
              <h4>newworldbooking@gmail.com</h4>
              <h3>Description</h3>
              <h5>Located in Tampa’s entertainment district, Ybor City, New World Brewery
                  brings you the best in original music from the local
                  independent music scene to recognized and respected national bands. </h5>
                <h1>BANDS</h1>
                <h3>Project Name</h3>
                <h4>Living Decent</h4>
                <h3>Contact Name</h3>
                <h4>Victor Alvarez</h4>
                <h3>Address</h3>
                <h4>241 Westmar Dr.</h4>
                <h3>City</h3>
                <h4>Tampa</h4>
                <h3>State</h3>
                <h4>FL</h4>
                <h3>Country</h3>
                <h4>United States</h4>
                <h3>Zip Code</h3>
                <h4>33605</h4>
                <h3>Phone</h3>
                <h4>813-727-5505</h4>
                <h3>E-mail</h3>
                <h4>livingdecentband@gmail.com</h4>
                <h3>Description</h3>
                <h5>A newish bi-county (Pinellas-Orange) indie outfit, led by Awkward Age
                  frontman Vic Alvarez and husband/wife package Jeff & Katrina Snyder.
                  Leaning heavily on late-90's influences like Nada Surf, Hum and Jimmy Eat World
                  the power trio has been riding a groundswell buzz in the
                  last couple months around the state. </h5>
                <h1>RECORD STORES</h1>
                  <h3>Project Name</h3>
                  <h4>Daddy Kool Records</h4>
                  <h3>Contact Name</h3>
                  <h4>Matt Shumate</h4>
                  <h3>Address</h3>
                  <h4>666 Central Ave.</h4>
                  <h3>City</h3>
                  <h4>St Petersburg</h4>
                  <h3>State</h3>
                  <h4>FL</h4>
                  <h3>Country</h3>
                  <h4>United States</h4>
                  <h3>Zip Code</h3>
                  <h4>33701</h4>
                  <h3>Phone</h3>
                  <h4>813-822-5665</h4>
                  <h3>E-mail</h3>
                  <h4>contact@daddykool.com</h4>
                  <h3>Description</h3>
                  <h5>Daddy Kool has been providing Tampa Bay area music lovers
                    with an incomparable shopping experience since 1985. </h5>
          </div>
    }
  }


export default dataStore;
