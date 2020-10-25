import React from 'react';

function Categories (props) {
    return (
        <div>
            {props.cat.map(item => {
                <p>{item}</p>
            })}
            <p>{props.cat}</p>
        </div>
    )
}

export default Categories;