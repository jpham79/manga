import React from 'react';
import { connect } from 'react-redux';

import { toggleDualPage } from '../../store/actions.js';

const mapStateToProps = (state) => ({
    useDualPage: state.requests.dualPage
});

const mapDispatchToProps = (dispatch) => ({
    toggleDualPage: (event) => dispatch(toggleDualPage(event.target.checked))
});

const Settings = (props) => {
    return (
        <div>
            <p>
                <label>
                    <input type="checkbox" className="filled-in" checked={props.useDualPage} onChange={props.toggleDualPage} />
                    <span>Enable Two Page per Row</span>
                </label>
            </p>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
