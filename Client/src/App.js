import React from 'react';
import './App.css';
import axios from 'axios';
import Router from './Compoennts/Router/Router';
import {useHistory} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    locations: [],
    newLocation: {

    }
  }

 componentDidMount() {
    axios.get('/locations')
        .then(res => {
            this.setState({
                locations: res.data
            })
        })
  }

  onChange = (e) => {
    this.setState({newLocation: {...this.state.newLocation, [e.target.name]: e.target.value}})
  }

  addLocation = () => {
    console.log("fired");
    let newLocation = {
      location: this.state.newLocation.location,
      description: this.state.newLocation.description,
      address: this.state.newLocation.address,
      city: this.state.newLocation.city,
      region: this.state.newLocation.region,
      img: this.state.newLocation.img,
      permit: this.state.newLocation.permit,
      morningLight: this.state.newLocation.morningLight,
      id: uuidv4()
    }
    axios.post('/locations', newLocation)
    .then(res => {
      this.setState({locations: res.data.locations})
      this.props.history.push('/locations')
    })
    console.log(newLocation)
  }

  updateState = () => {
    axios.get('/locations')
        .then(res => {
            this.setState({
                locations: res.data
            })
        })
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateState();
  }

  render() {
    
    return (
      <>{this.state.locations.locations !== undefined && 
        <Router state={this.state} addProps={this.props} addLocation={this.addLocation} onChange={this.onChange} />
      }</>
    )
  }
}

export default App;
