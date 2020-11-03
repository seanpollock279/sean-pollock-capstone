import React from 'react';
import './categories.scss';

function Categories (props) {
    // console.log(props)
    return (
        <div>
            {props.cat.map(item => {
               return <p className="categoryItem">{item}</p>
            })}
        </div>
    )
}

export default Categories;