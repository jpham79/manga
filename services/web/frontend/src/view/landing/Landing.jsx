import React from 'react';

import { connect } from 'react-redux';
import { toggleSidenav } from '../../store/actions.js';

const mapStateToProps = (state) => ({
    visible: state.requests.isSidenavVisible
});
  
const mapDispatchToProps = (dispatch) => ({
    showSidebar: () => dispatch(toggleSidenav(true))
});

export default function wrapLandingPage(WrappedComponent) {
    return connect(mapStateToProps, mapDispatchToProps) (
            class extends React.Component {

                render() {
                    let {...rest} = this.props

                    return <WrappedComponent {...rest}/>
                }
            }
        );
}

