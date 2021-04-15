import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

function Button(props) {
    const {buttonText, emitEvents} = props;
    function submitEvent() {
        emitEvents();
    }
    return (
        <div>
            <button data-test="buttonComponent" onClick={submitEvent}>{buttonText}</button>
        </div>
    )
}

Button.propTypes = {
    buttonText : PropTypes.string,
    emitEvent : PropTypes.func,
}
export default Button
