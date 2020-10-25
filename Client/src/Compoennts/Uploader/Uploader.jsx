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

                    <div className="catContainer">
                        <div className="uploader__check">
                            <input type="checkbox" value="Portraits"/><p className="uploader__subLabel">Portraits</p>
                        </div>
                        <div className="uploader__check">
                            <input type="checkbox" value="Weddings"/><p className="uploader__subLabel">Weddings</p>
                        </div>
                        <div className="uploader__check">
                            <input type="checkbox" value="Engagements"/><p className="uploader__subLabel">Engagements</p>
                        </div>
                        <div className="uploader__check">
                            <input type="checkbox" value="Lifestyle"/><p className="uploader__subLabel">Lifestyle</p>
                        </div>
                    </div>
                    
                        
                    
                    
                    <label className="uploader__label" htmlFor="">AVAILABLE LIGHT</label>
                    <div className="lightCheck" >
                        <input type="checkbox" name="morningLight" value="true"/><p className="uploader__subLabel">Morning</p>
                        <input type="checkbox" name="eveningLight" value="true"/><p className="uploader__subLabel">Evening</p>
                    </div>

                    <label className="uploader__label" htmlFor="">PUBLIC WASHROOMS</label>
                    <div className="lightCheck" >
                        <input type="checkbox" name="washrooms" value="true"/><p className="uploader__subLabel">Yes</p>
                        <input type="checkbox" name="washrooms" value="false"/><p className="uploader__subLabel">No</p>
                    </div>

                    <label className="uploader__label" htmlFor="">COMMERCIAL PERMIT REQUIRED</label>
                    <div className="lightCheck" >
                        <input type="checkbox" name="permit" value="true"/><p className="uploader__subLabel">Yes</p>
                        <input type="checkbox" name="permit" value="false"/><p className="uploader__subLabel">No</p>
                    </div>
                        

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