import React from 'react'
import './sortbar.scss'

export default function SortBar(props) {
    return (
        <div className="infoBar">
            <h4 className="infoBar__title">Sort by: </h4>
                <button className="infoBar__select" onClick={props.sortPortraits} value="portraits">Portraits</button>
                <button className="infoBar__select" onClick={props.sortLifestyle} value="lifestyle">Lifestyle</button>
                <button className="infoBar__select" onClick={props.sortWeddings} value="wedding">Wedding</button>
                <button className="infoBar__select" onClick={props.sortEngagements} value="engagements">Engagements</button>
        </div>
    )
}
