import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
    const {title, desc} = props;

    if(!title){
        return null
    }
    return (
        <div data-test="listWrapper">
            <h2 data-test="titleTest">{title}</h2>
            <p data-test="descriptionTest">{desc}</p>
        </div>  
    )
}

List.propTypes = {
    title : PropTypes.string,
    desc : PropTypes.string,
}
export default List
