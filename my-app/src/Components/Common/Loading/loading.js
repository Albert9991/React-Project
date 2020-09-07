import React from 'react';
import './loading.css';
import PropTypes from 'prop-types'

const Loading = (props) => {

    const { width, height } = props
    return (
        <div
            className="Loading"
            style={{
                width,
                height
            }}

        />
    )
}
Loading.defaultProps = {
    width: '30px',
    height: '30px'
}
Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
}

export default Loading;