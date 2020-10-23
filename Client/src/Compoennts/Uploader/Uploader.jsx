import React from "react";
import Header from '../Header/Header';
import './uploader.scss';

function Uploader (props) {
    return (
        <div>
            <Header />
            <div className="uploader">
                <h1 className="uploader__title">Upload New Location</h1>
                <form className="uploader__form" action="">
                    <label className="uploader__label" htmlFor="">NAME OF LOCATION</label>
                    <input className="uploader__input" onChange={props.onChange} value={props.newLocation.location} name="location" type="text"/>
                    <label className="uploader__label" id="description" htmlFor="">DESCRIPTION OF LOCATION</label>
                    <textarea className="uploader__inputTwo" onChange={props.onChange} value={props.newLocation.description} type="text" name="description"  cols="30" rows="10"></textarea>
                    <label className="uploader__label" htmlFor="">LOCATION ADDRESS</label>
                    <input className="uploader__input" onChange={props.onChange} value={props.newLocation.address} name="address" type="text" placeholder="Street # and Street Name"/>
                    <label className="uploader__label" htmlFor="">CITY</label>
                    <input className="uploader__input" onChange={props.onChange} value={props.newLocation.city} name="city" type="text" placeholder="City"/>
                    <label className="uploader__label" htmlFor="">REGION</label>
                    <input className="uploader__input" onChange={props.onChange} value={props.newLocation.region} name="region" type="text" placeholder="Province"/>
                    <label className="uploader__label" htmlFor="">CATEGORIES</label>
                    <div className="uploader__check">
                        <input type="checkbox"/><p className="uploader__subLabel">Portraits</p>
                    </div>
                    <div className="uploader__check">
                        <input type="checkbox"/><p className="uploader__subLabel">Weddings</p>
                    </div>
                    <div className="uploader__check">
                        <input type="checkbox"/><p className="uploader__subLabel">Weddings</p>
                    </div>
                    <div className="uploader__check">
                        <input type="checkbox"/><p className="uploader__subLabel">Engagements</p>
                    </div>
                    <div className="uploader__check">
                        <input type="checkbox"/><p className="uploader__subLabel">Lifestyle</p>
                    </div>
                        
                    
                    
                    <label className="uploader__label" htmlFor="">AVAILABLE LIGHT</label>

                    <label className="uploader__label" htmlFor="">IMAGE OF LOCATION</label>
                    <input className="uploader__input" onChange={props.onChange} value={props.newLocation.img} name="img" type="text" placeholder="Enter link to image" />
                    <button className="uploader__btn" onClick={props.addLocation}>UPLOAD</button>
                </form>
                <div className="uploader__foot">

                </div>
            </div>
        </div>
    )
}

export default Uploader;