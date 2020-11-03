import React from 'react';
import Yes from "../../Assets/Icons/yes.svg";
import No from '../../Assets/Icons/negative-vote.svg';

function Light (props) {
    return (
        <>{props.morningLight || props.eveningLight !== true ?
        (<img className="washroomIcon" src={Yes} />):
        (<img className="washroomIcon" src={No} />)}
        </>
    )
}

export default Light;