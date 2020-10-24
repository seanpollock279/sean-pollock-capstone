import React from 'react';
import Yes from "../../Assets/Icons/yes.svg";
import No from '../../Assets/Icons/negative-vote.svg';
import './permit.scss';

function Permit (props) {
    return (
        <>{props.permit === true ? 
            (<img className="permitIcon" src={Yes} />):
            (<img className="permitIcon" src={No} />)}
        </>
    )
}

export default Permit;