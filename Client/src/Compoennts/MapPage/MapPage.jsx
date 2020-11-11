import React, {useState} from 'react';
import LocationCard from '../LocationCard/LocationCard';
import Header from '../Header/Header';
import axios from 'axios';
import './mapPage.scss';
import SortBar from '../SortBar/SortBar';
import LocationFoot from '../LocationFoot/LocationFoot';

function MapPage (props) {
    let location = props.state.locations.locations;

    const [sorted, setSorted] = useState();

    const [portraitList, setPortraitList] = useState();

    

    
    const sortPortraits = (event) => {
        
        if (props.state.locations !== undefined) {
            let newPortraitList = props.state.locations.locations.map(item => {
                console.log(item.categories)
                item.categories.map(cat => { 
                })
                return newPortraitList;
            })
            console.log(newPortraitList)
            // let newPortraitList = props.state.locations.locations.categories.filter(item => item === 'portraits')
            setPortraitList(newPortraitList);
            setSorted('portraits');
            
        }
    }

    const [weddingList, setWeddingList] = useState();
    const sortWeddings = (event) => {
        console.log('fired')
        if (props.state.locations !== undefined) {
            let newWeddingList = props.state.locations.filter(props.state.locations.categories.find('wedding'))
            setPortraitList(newWeddingList);
            setSorted('wedding');
        }
    }

    const [lifestyleList, setLifestyleList] = useState();
    const sortLifestyle = (event) => {
        console.log('fired')
        if (props.state.locations !== undefined) {
            let newLifestyleList = props.state.locations.filter(props.state.locations.categories.find('lifestyle'))
            setLifestyleList(newLifestyleList);
            setSorted('lifestyle');
        }
    }

    const [engagementList, setEngagementList] = useState();
    const sortEngagements = (event) => {
        console.log('fired')
        if (props.state.locations !== undefined) {
            let newEngagementList = props.state.locations.filter(props.state.locations.categories.find('engagements'))
            setPortraitList(newEngagementList);
            setSorted('engagements');
        }
    }

    return (
        <>
            <Header />
            <SortBar sortPortraits={sortPortraits} sortEngagements={sortEngagements} sortLifestyle={sortLifestyle} sortWeddings={sortWeddings}/>
            <div className="Cards">
                {location.map(location => 
                    <LocationCard 
                    location={location.location}
                    description={location.description}
                    img={location.img}
                    id={location.id}
                    key={location.id}
                    />
                )}
            </div>
            
                {/* {sorted === 'portraits' ? portraitList.map(item => 
                <LocationCard 
                location={item.location}
                description={item.description}
                img={item.img}
                id={item.id}
                key={item.id} />) : sorted === 'wedding' ? weddingList.map(item => 
                <LocationCard 
                location={item.location}
                description={item.description}
                img={item.img}
                id={item.id}
                key={item.id} />) : sorted === 'lifestyle' ? lifestyleList.map(item => 
                <LocationCard 
                location={item.location}
                description={item.description}
                img={item.img}
                id={item.id}
                key={item.id} />) : sorted === 'engagements' ? engagementList.map(item => 
                <LocationCard 
                location={item.location}
                description={item.description}
                img={item.img}
                id={item.id}
                key={item.id} />) : location.map(location => 
                    <LocationCard 
                    location={location.location}
                    description={location.description}
                    img={location.img}
                    id={location.id}
                    key={location.id}
                    />
                )}
            </div>
            <LocationFoot /> */}
        </>
    )
}

    // for more info clicked through from a specific card it will change dynamic url to /locations/:id 

export default MapPage;