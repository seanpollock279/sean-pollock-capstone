import React from 'react';
import './App.css';
import axios from 'axios';
import Router from './Compoennts/Router/Router';

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
  render() {
    
    
    return (
      <>{this.state.locations.locations !== undefined && 
        <Router state={this.state} props={this.props} />
      }</>
    )
  }
}

export default App;
