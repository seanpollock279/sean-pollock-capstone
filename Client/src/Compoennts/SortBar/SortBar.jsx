import React from 'react'
import './sortbar.scss'

export default function SortBar() {
    return (
        <div className="infoBar">
            <h4 className="infoBar__title">Sort by: </h4>
            <select className="infoBar__select" name="shoot" id="shoot">
                <option className="infoBar__option" value="portraits">Portraits</option>
                <option className="infoBar__option" value="lifestyle">Lifestyle</option>
                <option className="infoBar__option" value="wedding">Wedding</option>
                <option className="infoBar__option" value="engagements">Engagements</option>
            </select>
        </div>
    )
}
