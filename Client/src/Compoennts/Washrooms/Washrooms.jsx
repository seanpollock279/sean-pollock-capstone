import React from 'react';
import Yes from "../../Assets/Icons/yes.svg";
import No from '../../Assets/Icons/negative-vote.svg';
import './washrooms.scss';

function Washrooms (props) {
    return (
        <>{props.washrooms === true ? 
            (<img className="washroomIcon" src={Yes} />):
            (<img className="washroomIcon" src={No} />)}
        </>
    )
}

export default Washrooms;