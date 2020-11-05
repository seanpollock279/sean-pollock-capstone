import React from 'react';
import './locationfoot.scss';

export default function LocationFoot() {
    return (
        <div className="locationFoot">
            <div className="locationFoot__btnContainer">
                <button className="locationFoot__btn">Toronto</button>
                <button className="locationFoot__btn">Montreal</button>
                <button className="locationFoot__btn">Calgary</button>
                <button className="locationFoot__btn">Vancouver</button>
            </div>
        </div>
    )
}
