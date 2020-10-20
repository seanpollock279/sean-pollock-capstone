import React from 'react';
import map from '../../Assets/ScreenShot2020-10-19at12.18.21PM';

class MapPage extends React.Component () {
    state = {
        locations: []
    }

    componentDidMount() {
        axios.get('/location')
            .then(res => {
                this.setState({
                    locations: res.data
                })
            })
    }

    render() {
        return (
            // <div>
            //     <div>
            //         <h1>Photography Locations</h1>
            //         <p>Looking for a spot for your next headshot session? Struggling to find a scenic location to photograph a bridal party?
            //             Start here by searching by location, event or best time of day to shoot.
            //         </p>
            //         <div>
            //             <img src={map} alt=""/>
            //         </div>
            //     </div>
            //     <div>
            //         <input type="text"/>
            //         <button>Search</button>
            //         <button>Add Location</button>
            //     </div>
            // </div>
        )
    }
}