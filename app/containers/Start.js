import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Start = () => {
    return (
        <div className="start-container">
            <h1>Start</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Start);
