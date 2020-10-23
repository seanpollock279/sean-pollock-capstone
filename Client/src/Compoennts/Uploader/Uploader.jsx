import React from "react";
import Header from '../Header/Header';
import './uploader.scss';

function Uploader () {
    return (
        <div>
            <Header />
            <div className="uploader">
                <h1 className="uploader__title">Upload New Location</h1>
                <form className="uploader__form" action="">
                    <label className="uploader__label" htmlFor="">NAME OF LOCATION</label>
                    <input className="uploader__input" type="text"/>
                    <label className="uploader__label" htmlFor="">DESCRIPTION OF LOCATION</label>
                    <textarea className="uploader__inputTwo" name="" id="" cols="30" rows="10"></textarea>
                    <label className="uploader__label" htmlFor="">LOCATION ADDRESS</label>
                    <input className="uploader__input" type="text" placeholder="Street # and Street Name"/>
                    <label className="uploader__label" htmlFor="">CITY</label>
                    <input className="uploader__input" type="text" placeholder="City"/>
                    <label className="uploader__label" htmlFor="">REGION</label>
                    <input className="uploader__input" type="text" placeholder="Province"/>
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
                    <input className="uploader__input" type="text"/>
                    <button className="uploader__btn">UPLOAD</button>
                </form>
                <div className="uploader__foot">

                </div>
            </div>
        </div>
    )
}

export default Uploader;